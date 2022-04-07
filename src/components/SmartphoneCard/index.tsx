import React from "react";

import styles from "./styles.module.scss";

const SmartphoneCard = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSide}>
        <img
          src={
            "https://prod-api.mediamarkt.pl/api/images/gallery_545_400/thumbnails/images/21/21607330/apple-iphone-13-polnoc.jpg"
          }
          alt="Logo"
          height={120}
        />
      </div>
    </div>
  );
};

export default SmartphoneCard;
