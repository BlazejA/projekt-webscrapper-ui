import { Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

import { getShopLogoPath } from '@/helpers/logo.helper';
import { ProductModel } from '@/models/productModel';

import styles from './styles.module.scss';

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
        <div className={styles.priceWrapper}>
          <p>{product.actual_price}zł</p>
          {product.old_price && <span className={styles.oldPrice}>{product.old_price}zł</span>}
        </div>
        <div className={styles.buttonWrapper}>
          <img src={getShopLogoPath(product.shop)} alt={product.shop} height={25} />
          <Button
            variant="contained"
            color="primary"
            size="small"
            target="_blank"
            href={product.link}
            endIcon={<Send />}
            sx={{ marginTop: 'auto' }}>
            <strong>Idź do sklepu</strong>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
