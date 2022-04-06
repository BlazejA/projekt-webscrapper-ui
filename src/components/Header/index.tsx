import React from "react";
import logo from "../../assets/apple_logo.png";

import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logo" height={100} />
      </div>
      <p>Compare Apple Products</p>
    </div>
  );
};

export default Header;