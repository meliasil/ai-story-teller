import style from "./Input.module.scss";
import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <input
      className={style.box}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
};

export default Input;
