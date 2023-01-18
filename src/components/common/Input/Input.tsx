import {FC} from 'react';
import css from './input.module.css'

interface InputProps {
    value: string;
    placeholder: string
}

export const Input: FC<InputProps> = (props) => {
    let {value, placeholder} = props
    return (
        <input className={css.input} value={value} placeholder={placeholder}/>
    )
}