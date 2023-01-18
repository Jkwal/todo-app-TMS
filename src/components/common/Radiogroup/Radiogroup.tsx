import {FC, Fragment} from 'react'
import css from './radiogroup.module.css'

interface RadiogroupProps {
    items: { id: string, label: string, value: string }[];
    name: string;
    value: string;

    onChange: (value:string) => void;
}

export const Radiogroup: FC<RadiogroupProps> = (props) => {
    let {items, name, value,onChange} = props
    return (
        <div className={css.radiogroup}>
            {items.map((item) => (
                <Fragment key={item.id}>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            checked={item.value === value}
                            onChange = {()=> onChange(item.value)}
                        />
                        {item.label}
                    </label>
                </Fragment>
            ))}
        </div>
    )
}