import {FC} from 'react';
//import css from 'checkbox.module.css'

interface CheckboxProps {
    checked: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    let {checked} = props
    return (
        <input type="checkbox" checked={checked}/>
    )
}