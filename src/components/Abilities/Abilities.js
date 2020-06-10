import React from "react";
import { Link } from "react-router-dom";
import classes from "./Abilities.module.scss";

const Abilities = ({ abilities }) => {
  const abilitiesList = abilities.map((item) => {
    const ability = item.ability.name;
    return (
      <li key={ability}>
        <Link to={`/abilities/${ability}`} >
          {ability}
        </Link>
      </li>
    );
  });
  return (
    <section className={classes.Abilities}>
      <b>Способности</b>
      <ul className={classes["abilities-list-constainer"]}>{abilitiesList}</ul>
    </section>
  );
};

export default Abilities;
