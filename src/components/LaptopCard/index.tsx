import React from 'react';

import CardWrapper from '@/components/CardWrapper';
import { LaptopModel } from '@/models/laptopModel';

import styles from './styles.module.scss';

type Props = {
  product: LaptopModel;
};

const LaptopCard = ({ product }: Props): JSX.Element => {
  return (
    <CardWrapper
      product={product}
      details={
        <div className={styles.detailsWrapper}>
          <div className={styles.descriptionWrapper}>
            <span className={styles.title}>Wyświetlacz:</span>
            <span>{product.details.screen}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.title}>Pamięć wewnętrzna:</span>
            <span>{product.details.internal_storage}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.title}>Pamięć RAM:</span>
            <span>{product.details.ram}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.title}>Procesor:</span>
            <span>{product.details.procesor}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.title}>System operacyjny:</span>
            <span>{product.details.system}</span>
          </div>
        </div>
      }
    />
  );
};

export default LaptopCard;
