import React, { useEffect, useState } from 'react';

import Filters from '@/components/Filters';
import Header from '@/components/Header';
import LaptopCard from '@/components/LaptopCard';
import SmartphoneCard from '@/components/SmartphoneCard';
import { LaptopModel } from '@/models/laptopModel';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneModel } from '@/models/smartphoneModel';
import { useTypedDispatch, useTypedSelector } from '@/store';
import { updatePricesFilter } from '@/store/filters.slice';
import { products } from '@/utils/products';

import styles from './styles.module.scss';

const ProductListView = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { nameQuery, shopNames } = useTypedSelector(state => state.filters);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (nameQuery) {
      setFilteredProducts([
        ...products.filter(product => product.name.toLowerCase().includes(nameQuery)),
      ]);
      return;
    }
    setFilteredProducts([
      ...products.filter(product => shopNames.includes(product.shop as ShopNameModel)),
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameQuery, products, shopNames]);

  // Create filtering by price
  // useEffect(() => {
  //   dispatch(
  //     updatePricesFilter([
  //       Math.min(...filteredProducts.map(item => parseInt(item.actual_price))),
  //       Math.max(...filteredProducts.map(item => parseInt(item.actual_price))),
  //     ])
  //   );
  // }, [dispatch, filteredProducts]);

  return (
    <div className={styles.container}>
      <Header />
      <Filters />
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
      </div>
    </div>
  );
};

export default ProductListView;
