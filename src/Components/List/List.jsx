import React from 'react';
import {useState} from 'react'
import s from './List.module.css'
import {LIST_TYPES} from "../../config";
import Form from "../Form/Form";
import { Link } from 'react-router-dom'

const List = (props) => {

    const {type, title, personalTasks, addNewTask, allTasks, setTasks} = props


    const backlogTasks = allTasks.filter(task => task.status === "backlog");
    const readyTasks = allTasks.filter(task => task.status === "ready");
    const inProgressTasks = allTasks.filter(task => task.status === "inProgress");




    const [isFormVisible, setFormVisible] = useState(false)
    const [isAddButtonVisible, setAddButtonVisible] = useState(true)

    const [isReadyButtonVisible, setReadyButtonVisible] = useState(true)
    const [isReadyListVisible, setReadyListVisible] = useState(false)

    const handleReadyNewTask = () => {
        setReadyListVisible(!isReadyListVisible)
        setReadyButtonVisible(false)
    }

    const [isInProgressButtonVisible, setInProgressButtonVisible] = useState(true)
    const [isInProgressListVisible, setInProgressListVisible] = useState(false)

    const handleInProgressNewTask = () => {
        setInProgressListVisible(!isInProgressListVisible)
        setInProgressButtonVisible(false)
    }

    const [isFinishedButtonVisible, setFinishedButtonVisible] = useState(true)
    const [isFinishedListVisible, setFinishedListVisible] = useState(false)

    const handleFinishedNewTask = () => {
        setFinishedListVisible(!isInProgressListVisible)
        setFinishedButtonVisible(false)
    }


    const readyHandleChange = (e) => {

        const updatedTasks = allTasks.map(task => {
            if (e.target.value === task.id) {
                return {...task, status: 'ready'}
            }
            return task
        })
        setTasks(updatedTasks)
        setReadyListVisible(false)
        setReadyButtonVisible(true)
    }

    const inProgressHandleChange = (e) => {

        const updatedTasks = allTasks.map(task => {
            if (e.target.value === task.id) {
                return {...task, status: 'inProgress'}
            }
            return task
        })
        setTasks(updatedTasks)
        setInProgressListVisible(false)
        setInProgressButtonVisible(true)
    }

    const finishedHandleChange = (e) => {

        const updatedTasks = allTasks.map(task => {
            if (e.target.value === task.id) {
                return {...task, status: 'finished'}
            }
            return task
        })
        setTasks(updatedTasks)
        setFinishedListVisible(false)
        setFinishedButtonVisible(true)
    }


    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
        setAddButtonVisible(true)
    }

    const handleAddNewTask = () => {
        setFormVisible(!isFormVisible)
        setAddButtonVisible(false)
    }


    return (
        <div className={s.list}>
            <h2 className={s.title}>{title}</h2>
            {personalTasks.length ?
                personalTasks.map(task =>
                    <Link to={`/tasks/${task.id}`} key={task.id} className={s.taskLink}>
                        <div className={s.task}>{task.title}</div>
                    </Link>

                ) :
                <p className={s.task}>No tasks added yet</p>}
            {type === LIST_TYPES.BACKLOG && isAddButtonVisible &&
            <button onClick={handleAddNewTask} className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <Form setAddButtonVisible={setAddButtonVisible} formSubmit={formSubmit}/>)}

            {type === LIST_TYPES.READY && isReadyButtonVisible &&
            (backlogTasks.length !== 0 ?
                <button onClick={handleReadyNewTask} className={s.addButton}>+ Add card</button> :
                <button className={s.inactiveButton}>+ Add card</button>)
            }


            {type === LIST_TYPES.READY && isReadyListVisible &&
            <select className={s.select} onChange={readyHandleChange}>
                <option selected="selected"></option>
                {allTasks.map(task => {
                    if (task.status === LIST_TYPES.BACKLOG) {
                        return <option value={task.id} key={task.id} id={task.id}>{task.title}</option>
                    }
                })}
            </select>}


            {type === LIST_TYPES.IN_PROGRESS && isInProgressButtonVisible &&
            (readyTasks.length !== 0 ?
                <button onClick={handleInProgressNewTask} className={s.addButton}>+ Add card</button> :
                <button className={s.inactiveButton} >+ Add card</button>)
            }

            {
                type === LIST_TYPES.IN_PROGRESS && isInProgressListVisible &&
                <select className={s.select} onChange={inProgressHandleChange}>
                    <option selected="selected"></option>
                    {allTasks.map(task => {
                        if (task.status === LIST_TYPES.READY) {
                            return <option value={task.id} key={task.id} id={task.id}>{task.title}</option>
                        }
                    })}
                </select>
            }


            {type === LIST_TYPES.FINISHED && isFinishedButtonVisible &&
            (inProgressTasks.length !== 0 ?
                <button onClick={handleFinishedNewTask} className={s.addButton}>+ Add card</button> :
                <button className={s.inactiveButton}>+ Add card</button>)}

            {type === LIST_TYPES.FINISHED && isFinishedListVisible &&
            <select className={s.select} onChange={finishedHandleChange}>
                <option selected="selected"></option>
                {allTasks.map(task => {
                    if (task.status === LIST_TYPES.IN_PROGRESS) {
                        return <option value={task.id} key={task.id} id={task.id}>{task.title}</option>
                    }
                })}
            </select>
            }


        </div>
    );
}


export default List;