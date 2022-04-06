import {Switch, Route} from 'react-router-dom'
import React from 'react';
import s from './main.module.css';
import Board from "../Board/Board";
import TaskDetails from "../TaskDetails/TaskDetails";


const Main = (props) => {
    return (
        <main className={s.main}>

            <Switch>
                <Route exact path={'/'}>
                    <Board {...props} />
                </Route>
                <Route path={'/tasks/:taskId'}>
                    <TaskDetails {...props} />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;
