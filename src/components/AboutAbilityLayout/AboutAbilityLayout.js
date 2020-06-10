import React from "react";
import classes from "./AboutAbilityLayout.module.scss";
const AboutAbilityLayout = ({ children}) => {
  return (
    <div className={classes.layout}>
      <h1>О способности</h1>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default AboutAbilityLayout;
