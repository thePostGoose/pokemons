import React from "react";
import classes from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";
const PokemonCard = ({ name }) => {
  return (
    <Link to={`/pokemons/${name}`} className={classes.PokemonCard}>
      <div className={classes["img-container"]}>
        <img
          src={`https://via.placeholder.com/190x300/f7c6ab/06164d?text=${name}`}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
    </Link>
  );
};

export default PokemonCard;
