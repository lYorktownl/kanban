import React from 'react';
import s from './Footer.module.css';

function Footer(props) {

    const {tasks}= props

    const activeTasks = tasks.filter(task => task.status === "backlog")
    const finishedTasks = tasks.filter(task => task.status === "finished")

    return (
        <div className={s.footer} >
            <span className={s.Active}>Active tasks: {activeTasks.length}</span>
            <span className={s.Finished}>Finished tasks: {finishedTasks.length}</span>
            <span className={s.name}>Kanban board by Serj, 2022</span>
        </div>
    );
}

export default Footer;
