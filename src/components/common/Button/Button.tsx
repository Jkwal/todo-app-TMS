import {FC, PropsWithChildren} from 'react'
import css from './button.module.css'
import cn from 'classnames';

interface ButtonProps {
    onClick: () => void;
    className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    let {children, onClick, className} = props;
    return (
        <button className={cn(css.btn, className)} onClick={onClick}>{children}</button>
    )
}