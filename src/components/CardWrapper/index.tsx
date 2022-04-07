import React from "react";
import { Send } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import { ProductModel } from "@/models/productModel";
import { getShopLogoPath } from "@/helpers/logo.helper";

type Props = {
  product: ProductModel;
  details: JSX.Element;
};

const CardWrapper = ({ product, details }: Props): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={product.img} alt="Logo" />
      </div>
      <div className={styles.leftSide}>
        <p>{product.name}</p>
        <div className={styles.detailsWrapper}>{details}</div>
      </div>
      <div className={styles.rightSide}>
        <p>{product.actual_price}</p>
        {product.old_price && (
          <span className={styles.oldPrice}>{product.old_price}</span>
        )}
        <img
          src={getShopLogoPath(product.shop)}
          alt={product.shop}
          height={30}
        />
        <Button
          variant="contained"
          size="small"
          target="_blank"
          href={product.link}
          endIcon={<Send />}
          sx={{ marginTop: "auto" }}
        >
          Przejdź do sklepu
        </Button>
      </div>
    </div>
  );
};

export default CardWrapper;
