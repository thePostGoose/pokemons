import React from "react";
import classes from "./Info.module.scss";
import Abilities from "../Abilities/Abilities";
import Loader from "../UI/Loader/Loader";

const Info = ({ stats, name, types, abilities, loading }) => {
  const dl = stats.map((item) => {
    return (
      <p className={classes["dl-item"]} key={item.stat.name}>
        <span className={classes["stat-name"]}>{item.stat.name}</span>
        <span className={classes.dots}></span>
        <span className={classes["stat-value"]}>{item["base_stat"]}</span>
      </p>
    );
  });

  return (
    <div>
      {loading ? (
        <div className={classes['loader-container']}>
          <Loader />
        </div>
      ) : (
        <article className={classes.Info}>
          <div className={classes["img-container"]}>
            <img
              src={`https://via.placeholder.com/190x300/f7c6ab/06164d?text=${name}`}
              alt={name}
            />
          </div>
          <div className={classes["stats-container"]}>
            <div className={classes["dl-constainer"]}>
              <b>Характеристики: </b>
              {dl}
            </div>
            <Abilities abilities={abilities} />
            <div className={classes["type-constainer"]}>
              <b>Тип: </b>
              <span>{types.map((item) => item.type.name).join(", ")}</span>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default Info;
