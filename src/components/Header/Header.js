import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NOTES</div>
      <div className={styles.colors}>COL</div>
    </header>
  );
};

export default Header;
