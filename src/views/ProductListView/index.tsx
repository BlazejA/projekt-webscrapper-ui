import { Backdrop, CircularProgress, Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Filters from '@/components/Filters';
import Header from '@/components/Header';
import LaptopCard from '@/components/LaptopCard';
import NoResult from '@/components/NoResult';
import SmartphoneCard from '@/components/SmartphoneCard';
import { LaptopModel } from '@/models/laptopModel';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneModel } from '@/models/smartphoneModel';
import { useGetProductsQuery } from '@/services/products.service';
import { useTypedSelector } from '@/store';

import styles from './styles.module.scss';

const ProductListView = (): JSX.Element => {
  const { nameQuery, shopNames, category, discountOnly } = useTypedSelector(state => state.filters);

  const { data: productsFromBackend } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
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
          ...productsFromBackend?._items.filter((product: any) =>
            product.name.toLowerCase().includes(nameQuery)
          ),
        ]);
        setActivePage(1);
        return;
      }
      setActivePage(1);
      let filteredList = [...productsFromBackend?._items];

      // Shop names filter
      filteredList = filteredList.filter((product: any) =>
        shopNames.includes(product.shop as ShopNameModel)
      );

      // Only discount filter
      if (discountOnly) {
        filteredList = filteredList.filter((product: any) => product.old_price !== '');
      }

      // Category filter
      if (category) {
        filteredList = filteredList.filter((product: any) => product.category === category);
      }

      // // Sorting by actual price
      // if (sortingType) {
      //   filteredList = filteredList.sort((a, b) =>
      //     sortingType === 'asc'
      //       ? parseFloat(a.actual_price) - parseFloat(b.actual_price)
      //       : parseFloat(b.actual_price) - parseFloat(a.actual_price)
      //   );
      // }

      // // Price filter
      // filteredList = products.filter(
      //   item =>
      //     parseFloat(item.actual_price) >= (parseFloat(price.min) || 0) &&
      //     parseFloat(item.actual_price) <= (parseFloat(price.max) || 100000000000)
      // );

      setFilteredProducts(filteredList);
    }
  }, [nameQuery, category, shopNames, productsFromBackend, discountOnly]);

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
                  {product.category === 'smartfon' && (
                    <SmartphoneCard key={product.id} product={product as SmartphoneModel} />
                  )}
                  {product.category === 'laptop' && (
                    <LaptopCard key={product.id} product={product as LaptopModel} />
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
