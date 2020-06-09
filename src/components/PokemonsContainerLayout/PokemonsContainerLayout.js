import React from "react";
import styles from "./PokemonsContainerLayout.module.scss";
const PokemonsContainerLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <h1>Выбери покемона</h1>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default PokemonsContainerLayout;
