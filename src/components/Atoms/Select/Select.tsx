import style from "./Select.module.scss";
import { ListOption } from "@/types/common";

interface SelectProps {
    list: ListOption[];
    setValue: (value: string) => void;
}

const Select = ({ list, setValue }: SelectProps) => {
    return (
        <div className={style.main}>
        <select className={style.select} onChange={(e) => setValue(e.target.value)}>
            
                <option value="" hidden>
                seleziona
              </option>
              {list.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        </div>
    );
}

export default Select;

