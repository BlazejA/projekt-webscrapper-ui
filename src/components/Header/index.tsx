import React from 'react';

import logo from '@/assets/apple_gray_logo.png';

import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logo" height={60} />
      </div>
      <p>Apple Products Comparison</p>
    </div>
  );
};

export default Header;
