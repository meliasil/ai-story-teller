import Select from "@/components/Atoms/Select/Select";
import style from "./SelectBox.module.scss";
import { ListOption } from "@/types/common";
import { Dispatch, SetStateAction } from "react";

interface SelectBoxProps {
    label: string;
    list: ListOption[];
    setValue: Dispatch<SetStateAction<string>>;
}

const SelectBox = (props: SelectBoxProps) => {
    const { label, list, setValue } = props;

    return (
        <div className={style.main}>
            <h3>{label}</h3>
            <Select list={list} setValue={setValue} />
        </div>
    );
}

export default SelectBox;

