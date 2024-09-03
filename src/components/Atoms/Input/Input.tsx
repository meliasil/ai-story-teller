import { useState } from "react";
import style from "./Input.module.scss";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ value, setValue }: InputProps) => {
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
