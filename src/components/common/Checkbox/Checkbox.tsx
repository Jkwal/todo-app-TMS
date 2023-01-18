import {FC,ChangeEvent} from 'react';
//import css from 'checkbox.module.css'

interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    let {checked, onChange} = props
    return (
        <input type="checkbox" onChange={onChange} checked={checked}/>
    )
}