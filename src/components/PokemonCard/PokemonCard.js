import React from "react";
import styles from "./PokemonCard.module.scss";
const PokemonCard = ({ name }) => {
  return (
    <div className={styles.PokemonCard}>
      <div className={styles["img-container"]}>
        <img
          src={`https://via.placeholder.com/190x300/f7c6ab/06164d?text=${name}`}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
