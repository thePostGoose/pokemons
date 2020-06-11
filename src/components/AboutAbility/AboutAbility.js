import React from "react";
import classes from "./AboutAbility.module.scss";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader/Loader";
const AboutAbility = ({ abilityName, effect, pokemonsList, loading }) => {
  let linkList = null;
  if (pokemonsList) {
    linkList = pokemonsList.map((item) => {
      return (
        <li key={item}>
          <Link to={`/pokemons/${item}`}>{item}</Link>
        </li>
      );
    });
  }
  return (
    <div>
      {loading ? (
        <div className={classes["loader-container"]}>
          <Loader />
        </div>
      ) : (
        <section className={classes.AboutAbility}>
          <div>
            <b>Название: </b>
            <span>{abilityName}</span>
          </div>
          <div>
            <b>Описание: </b>
            <span>{effect}</span>
          </div>
          <div className={classes["list-container"]}>
            <b>Покемоны обладающие этой способностью: </b>
            <ul>{linkList}</ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutAbility;
