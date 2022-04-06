import React from 'react';
import {useState} from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import s from './TaskDetails.module.css';
import clsx from "clsx";


function TaskDetails(props) {

    const match = useRouteMatch()
    const {taskId} = match.params
    const {tasks, setTasks} = props
    const task = tasks.find(task => task.id === taskId)

    const [isEditButtonVisible, setEditButtonVisible] = useState(true)
    const [isSubmitButtonVisible, setSubmitButtonVisible] = useState(false)

    const [descriptionValue, setDescriptionValue] = useState(task.description)



    const buttonSwitch = () => {
        setEditButtonVisible(false)
        setSubmitButtonVisible(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const updatedTasks = tasks.map(task => {
            if (taskId === task.id) {
                return {...task, description: descriptionValue}
            }
            return task
        })
        setTasks(updatedTasks)
        setSubmitButtonVisible(false)
        setEditButtonVisible(true)
    }


    const handleChange = e => {
        setDescriptionValue(e.target.value)
    }

    return (
        <div className={s.tdWrapper}>
            <div className={s.tdTask}>

                <h2 className={s.tdTitle}>{task.title}</h2>
                {isEditButtonVisible &&
                <>
                    <p className={s.tdParagraf}>{descriptionValue || "This task has no description"}</p>
                    <button className={s.tdEditButton} onClick={buttonSwitch}>Edit description</button>
                </>
                }
                {isSubmitButtonVisible &&
                <form className={s.tdForm} onSubmit={handleSubmit}>
                    <textarea className={s.tdTextarea} name="tdd" id="tdd" onChange={handleChange}>{descriptionValue}</textarea>
                    <button className={s.tdSubmitButton} type='submit'>Submit</button>
                </form>

                }


            </div>
            <div className={s.tdBack}>
                <Link className={s.tdLink} to='/'>&#10006;</Link>
            </div>
        </div>
    );
}


export default TaskDetails;
