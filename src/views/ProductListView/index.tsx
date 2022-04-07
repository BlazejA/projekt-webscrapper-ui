import React, { useEffect, useState } from "react";

import SmartphoneCard from "@/components/SmartphoneCard";
import Filters from "@/components/Filters";

import styles from "./styles.module.scss";
import Header from "@/components/Header";
import { products } from "@/utils/products";
import { SmartphoneModel } from "@/models/smartphoneModel";
import LaptopCard from "@/components/LaptopCard";
import { LaptopModel } from "@/models/laptopModel";
import { useTypedSelector } from "@/store";

const ProductListView = (): JSX.Element => {
  const { nameQuery } = useTypedSelector((state) => state.filters);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (nameQuery) {
      setFilteredProducts([
        ...products.filter((product) =>
          product.name.toLowerCase().includes(nameQuery)
        ),
      ]);
      return;
    }
    setFilteredProducts(products);
  }, [nameQuery, products]);

  return (
    <div className={styles.container}>
      <Header />
      <Filters />
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <>
            {product.category === "smartphone" && (
              <SmartphoneCard
                key={product.id}
                product={product as SmartphoneModel}
              />
            )}
            {product.category === "laptop" && (
              <LaptopCard key={product.id} product={product as LaptopModel} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductListView;
