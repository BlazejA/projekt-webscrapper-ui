import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Filters from '@/components/Filters';
import Header from '@/components/Header';
import LaptopCard from '@/components/LaptopCard';
import NoResult from '@/components/NoResult';
import SmartphoneCard from '@/components/SmartphoneCard';
import { LaptopModel } from '@/models/laptopModel';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneModel } from '@/models/smartphoneModel';
import { useTypedSelector } from '@/store';
import { products } from '@/utils/products';

import styles from './styles.module.scss';

const ProductListView = (): JSX.Element => {
  const { nameQuery, shopNames, price, category, sortingType } = useTypedSelector(
    state => state.filters
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Filtering by name query
    if (nameQuery) {
      setFilteredProducts([
        ...products.filter(product => product.name.toLowerCase().includes(nameQuery)),
      ]);
      return;
    }

    let filteredList = filteredProducts;

    // Price filter
    filteredList = products.filter(
      item =>
        parseFloat(item.actual_price) >= (parseFloat(price.min) || 0) &&
        parseFloat(item.actual_price) <= (parseFloat(price.max) || 100000000000)
    );

    // Category filter
    if (category) {
      filteredList = filteredList.filter(item => item.category === category);
    }

    // Sorting by actual price
    if (sortingType) {
      filteredList = filteredList.sort((a, b) =>
        sortingType === 'asc'
          ? parseFloat(a.actual_price) - parseFloat(b.actual_price)
          : parseFloat(b.actual_price) - parseFloat(a.actual_price)
      );
    }

    // Shop name filter
    filteredList = filteredList.filter(product =>
      shopNames.includes(product.shop as ShopNameModel)
    );

    setFilteredProducts(filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameQuery, shopNames, price, products, category, sortingType]);

  return (
    <div className={styles.container}>
      <Header />
      <Filters />
      {!filteredProducts.length ? (
        <NoResult />
      ) : (
        <div className={styles.productList}>
          {filteredProducts.map(product => (
            <>
              {product.category === 'smartphone' && (
                <SmartphoneCard key={product.id} product={product as SmartphoneModel} />
              )}
              {product.category === 'laptop' && (
                <LaptopCard key={product.id} product={product as LaptopModel} />
              )}
            </>
          ))}
          <Stack spacing={3} sx={{ paddingTop: '20px', display: 'flex', alignSelf: 'center' }}>
            <Pagination count={10} color="primary" size="large" />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default ProductListView;
