import React from "react";
import styles from "./PokemonsList.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import Loader from "../UI/Loader/Loader";
const PokemonsList = ({ pokemonsNames, searchValue, loading }) => {
  return (
    <div className={styles.PokemonsList}>
      {loading ? (
        <div className={styles["loader-container"]}>
          <Loader />
        </div>
      ) : (
        pokemonsNames
          .filter((item) => {
            return !searchValue || item.includes(searchValue.toLowerCase());
          })
          .map((item) => {
            return <PokemonCard name={item} key={item} />;
          })
      )}
    </div>
  );
};

export default PokemonsList;
