import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  onChange,
  type,
  value,
  label,
  errorMessage,
  valid = true,
}) => {
  type = type || "text";
  const cls = [styles.Input];
  const id = `${type} - ${Math.random()}`;

  if (!valid) cls.push(styles.invalid);

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} value={value} />
      {!valid ? (
        <span className={styles["error-message"]}>
          {errorMessage || "Веденные данные не корректны"}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
