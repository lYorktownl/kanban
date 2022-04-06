import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {BrowserRouter} from 'react-router-dom'

import data from "./mock.json"
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";





function App() {

    const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


 /*const [tasks , setTasks]= useState(data)*/

    return (

        <div className={s.wrapper}>
            <BrowserRouter>
                <Header/>
                <Main tasks={tasks} setTasks={setTasks}/>
                <Footer tasks={tasks}/>

            </BrowserRouter>
        </div>
    );

}

export default App;
