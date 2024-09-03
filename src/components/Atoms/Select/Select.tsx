import { ChangeEvent } from "react";
import style from "./Select.module.scss";

const Select = () => {
  const options = [
    {
      label: "label 1",
      value: "value 1",
    },
    {
      label: "label 2",
      value: "value 2",
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={style.main}>
      <select onChange={handleChange}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
