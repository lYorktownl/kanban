import React from 'react';
import uniqid from 'uniqid'
import s from './Board.module.css';
import {LIST_COPY, LIST_TYPES} from "../../config";
import List from "../List/List";


const Board = (props) => {
    const {tasks, setTasks}= props

    const addNewTask = (title, description) => {
        const task = {
            id: uniqid(),
            title,
            description,
            created: new Date().toISOString(),
            status: 'backlog',
        }

        setTasks([...tasks, task]);
    }
    return (
        <div className={s.board}>
            {
                Object.values(LIST_TYPES).map(type => {
                    const listTasks = tasks.filter(task => task.status === type)
                    return(
                        <List
                            key={LIST_COPY[type]}
                            type={type}
                            title={LIST_COPY[type]}
                            personalTasks={listTasks || []}
                            addNewTask={addNewTask}
                            allTasks={tasks}
                            setTasks={setTasks}
                        />
                    )
                })
            }
        </div>
    );
}


export default Board;
