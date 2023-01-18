import {Button, Checkbox, Input, Radiogroup} from './common'
import css from './app.module.css';

const tasks = [
    {id: 1, label: 'Выучить JS', isDone: true},
    {id: 3, label: 'Выучить TypeScript', isDone: false},
    {id: 2, label: 'Выучить React', isDone: true},
    {id: 3, label: 'Выучить Redux', isDone: false},
]

const filters = [
    {id: '1', label: 'All', value: 'all'},
    {id: '2', label: 'Active', value: 'active'},
    {id: '3', label: 'Banned', value: 'banned'},
];

const filterState: string = 'all'
const handlerSubmit = () => {
    alert("Отправить")
}

const handleDelete = () => {
    alert("Удалить")
}
export const App = () => {
    return (
        <div className={css.app}>
            <h1>TodoList with React/TS</h1>
            <div className={css.form}>
                <Input value={''} placeholder={'Add a task'}/>
                <Button onClick={handlerSubmit} type='submit'>Add</Button>
            </div>
            <Radiogroup items={filters} name="filter" value={filterState}/>

            <ul className={css.task_list}>
                {tasks.filter((task): boolean => {

                    if (filterState === 'all') {
                        return true;
                    }

                    if (filterState === 'active') {
                        return !task.isDone;
                    }

                    return task.isDone;
                }).map((task) => (
                    <li key={task.id}>
                        <Checkbox checked={task.isDone}/>
                        {task.label}
                        {task.isDone && <Button onClick={handleDelete} type='delete'> Delete task</Button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}