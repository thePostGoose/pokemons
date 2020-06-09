import React from "react";
import styles from "./Search.module.scss";
import Input from "../UI/Input/Input";

const Search = ({ onChange, value }) => {
  return (
    <div className={styles.Search}>
      <Input label={"начни вводить имя"} onChange={onChange} value={value} />
    </div>
  );
};

export default Search;
