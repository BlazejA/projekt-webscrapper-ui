import React from "react";

import SmartphoneCard from "@/components/SmartphoneCard";
import Filters from "@/components/Filters";

import styles from "./styles.module.scss";

const ProductListView = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Filters />
      <div className={styles.productList}>
        <SmartphoneCard />
        <SmartphoneCard />
        <SmartphoneCard />
        <SmartphoneCard />
      </div>
    </div>
  );
};

export default ProductListView;
