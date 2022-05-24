import React from 'react';

import noResult from '@/assets/no_result.png';

import styles from './styles.module.scss';

const NoResult = (): JSX.Element => {
  return (
    <div className={styles.noResult}>
      <div className={styles.logoWrapper}>
        <img src={noResult} alt="no_result" height={400} />
      </div>
      <p>Brak wyników dla wprowadzonych kryteriów wyszukiwania</p>
    </div>
  );
};

export default NoResult;
