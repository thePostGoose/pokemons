import React from "react";
import classes from "./PokemonPageLayout.module.scss";
const PokemonsContainerLayout = ({ children, name }) => {
  return (
    <div className={classes.layout}>
      <h1>{name}</h1>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default PokemonsContainerLayout;
