import {FC, PropsWithChildren} from 'react'
import css from './button.module.css'

interface ButtonProps {
    onClick: () => void;
    type: 'submit' | 'reset' | 'button' | 'delete';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    let {children, onClick, type} = props;
    return (
        <button className={css[type]} onClick={onClick}>{ children }</button>
    )
}