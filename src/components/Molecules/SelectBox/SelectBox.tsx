import Select from "@/components/Atoms/Select/Select";
import style from "./SelectBox.module.scss";
import { ListOption } from "@/types/common";




interface SelectBoxProps {
    label: string;
    list: ListOption[];
}



const SelectBox = (props: SelectBoxProps) => {
    const {label, list} = props;

    

  return (
    <div>
        <h3>{label}</h3>
        <Select />
    </div>
  )
}

export default SelectBox
