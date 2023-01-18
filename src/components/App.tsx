import {Component} from "react";
import {Button, Checkbox, Input, Radiogroup} from './common'
import css from './app.module.css';

interface Task {
    id: number;
    label: string;
    isDone: boolean
}

interface AppProps {
    className?: string;
}

interface AppState {
    newTaskInput: string;
    tasks: Task[];
    filter: string;

    counter: number;
}

export class App extends Component<AppProps, AppState> {

    state: AppState = {
        newTaskInput: '',
        tasks: [],
        filter: 'all',
        counter: 0,
    };
    filters = [
        {id: '1', label: 'All', value: 'all'},
        {id: '2', label: 'Active', value: 'active'},
        {id: '3', label: 'Banned', value: 'banned'},
    ];

    localStorageKey = '__users__';

    addTaskHandler = () => {
        if (this.state.newTaskInput.trim().length === 0) {
            return alert('Add task')
        }

        this.setState((prevState) => ({
            tasks: [...prevState.tasks, {id: Date.now(), isDone: false, label: prevState.newTaskInput}],
            newTaskInput: ''
        }))
    }
    deleteTaskHandler = (id: Task['id']) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id)
        }));
    }

    changeFilterHandler = (filter: string) => {
        this.setState({filter})
    }
    toggleTaskHandler = (id: Task['id']) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task),
        }))
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');

        if (tasks.length) {
            this.setState({
                tasks
            });
        }
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any) {
        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.tasks))
        }
    }

    componentWillUnmount(){
        console.log('asfafsaf')
    }


    render() {
        return (
            <div className={css.app}>
                <h1>TodoList with React/TS</h1>
                <div className={css.form}>
                    <Input value={this.state.newTaskInput}
                           onChange={(e) => this.setState({newTaskInput: e.target.value})} placeholder={'Add a task'}/>
                    <Button onClick={this.addTaskHandler}>Add</Button>
                </div>
                <Radiogroup onChange={this.changeFilterHandler} items={this.filters} name="filter"
                            value={this.state.filter}/>

                <ul className={css.task_list}>
                    {this.state.tasks.filter((task): boolean => {

                        if (this.state.filter === 'all') {
                            return true;
                        }

                        if (this.state.filter === 'active') {
                            return !task.isDone;
                        }

                        return task.isDone;
                    }).map((task) => (
                        <li key={task.id}>
                            <Checkbox
                                checked={task.isDone}
                                onChange={() => this.toggleTaskHandler(task.id)}
                            />
                            {task.label}
                            {task.isDone &&
                                <Button className={css.deleteBtn}
                                        onClick={() => this.deleteTaskHandler(task.id)}> Delete task</Button>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}