import React from 'react';
import s from './TypeOfTasks.module.css';
import TaskDetails from "../TaskDetails/TaskDetails";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function TypeOfTasks(props) {

    const {tasks, setTasks} = props

    const addNewTask = (title, description) => {
        const task = {
            id: generateUniqueID(),
            title,
            description,
            time: new Date().toISOString(),
            type: "backlog"

        }
        setTasks([...tasks, task])
    }

    let newTaskName = React.createRef();


    function showInput() {
        if (props.state.backLog.inputStyle.showInput) {
            return s.input
        } else {
            return s.inputRemove
        }
    }


    let tasksElements = props.state.backLog.tasks
        .map(task => <TaskDetails name={task.name}/>)

    return (
        <div className={s.typeOfTasks}>
            <span className={s.title}>{props.state.backLog.title}</span>
            {tasksElements}

            <input className={showInput()}
                   ref={newTaskName}
                   type="text"/>
            <button className={s.button} onClick={() => {
                props.setCount(
                    props.state.backLog.tasks.push({
                        id: `${'task' + (props.state.backLog.tasks.length + 1)}`,
                        name: newTaskName.current.value
                    })
                )
            }}>Add card
            </button>
        </div>
    );
}


export default TypeOfTasks;
