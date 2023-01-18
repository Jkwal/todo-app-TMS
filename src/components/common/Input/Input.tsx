import {FC,ChangeEvent} from 'react';
import css from './input.module.css'

interface InputProps {
    value: string;
    placeholder: string;

    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
    let {value, placeholder, onChange} = props
    return (
        <input className={css.input} value={value} onChange={onChange} placeholder={placeholder}/>
    )
}