import { Backdrop, CircularProgress, Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Filters from '@/components/Filters';
import Header from '@/components/Header';
import LaptopCard from '@/components/LaptopCard';
import NoResult from '@/components/NoResult';
import SmartphoneCard from '@/components/SmartphoneCard';
import { LaptopModel } from '@/models/laptopModel';
import { ProductModel } from '@/models/productModel';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneModel } from '@/models/smartphoneModel';
import { useGetProductsQuery } from '@/services/products.service';
import { useTypedSelector } from '@/store';

import styles from './styles.module.scss';

const ProductListView = (): JSX.Element => {
  const { nameQuery, shopNames, category, discountOnly, sortingType, price } = useTypedSelector(
    state => state.filters
  );

  const { data: productsFromBackend } = useGetProductsQuery();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [productsListForActivePage, setProductsListForActivePage] = useState<any[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsForPage = 10;

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / itemsForPage));
  }, [filteredProducts]);

  useEffect(() => {
    if (productsFromBackend) {
      // Filtering by query name
      if (nameQuery) {
        setFilteredProducts([
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...productsFromBackend.filter((product: any) =>
            product.name.toLowerCase().includes(nameQuery)
          ),
        ]);
        setActivePage(1);
        return;
      }
      setActivePage(1);
      let filteredList = [...productsFromBackend];

      // Shop names filter
      filteredList = filteredList.filter((product: ProductModel) =>
        shopNames.includes(product.shop as ShopNameModel)
      );

      // Only discount filter
      if (discountOnly) {
        filteredList = filteredList.filter((product: ProductModel) => product.oldPrice !== '');
      }

      // Category filter
      if (category) {
        filteredList = filteredList.filter(
          (product: ProductModel) => product.category === category
        );
      }

      // Sorting by actual price
      if (sortingType) {
        filteredList = filteredList.sort((a, b) =>
          sortingType === 'asc'
            ? parseFloat(a.actualPrice) - parseFloat(b.actualPrice)
            : parseFloat(b.actualPrice) - parseFloat(a.actualPrice)
        );
      }

      // Price filter
      filteredList = filteredList.filter(
        product =>
          parseFloat(product.actualPrice) >= (parseFloat(price.min) || 0) &&
          parseFloat(product.actualPrice) <= (parseFloat(price.max) || 100000000000)
      );

      setFilteredProducts(filteredList);
    }
  }, [nameQuery, category, shopNames, productsFromBackend, discountOnly, sortingType, price]);

  useEffect(() => {
    setProductsListForActivePage(
      filteredProducts.slice((activePage - 1) * itemsForPage, activePage * itemsForPage)
    );
  }, [activePage, filteredProducts]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setActivePage(value);
  };

  return (
    <>
      {productsFromBackend ? (
        <div className={styles.container}>
          <Header />
          <Filters />
          {!filteredProducts.length ? (
            <NoResult />
          ) : (
            <div className={styles.productList}>
              {productsListForActivePage.map(product => (
                <>
                  {product.category === 'smartphone' && (
                    <SmartphoneCard key={product._id.$oid} product={product as SmartphoneModel} />
                  )}
                  {product.category === 'laptop' && (
                    <LaptopCard key={product._id.$oid} product={product as LaptopModel} />
                  )}
                </>
              ))}
              <Stack spacing={3} sx={{ paddingTop: '20px', display: 'flex', alignSelf: 'center' }}>
                <Pagination
                  count={totalPages}
                  page={activePage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Stack>
            </div>
          )}
        </div>
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={!productsFromBackend}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default ProductListView;
