import React from 'react';
import {useState} from 'react'
import clsx from 'clsx'
import s from './Form.module.css';


const Form = (props) => {

    const {formSubmit} = props

    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            formSubmit(values.title, values.description)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <button className={s.submit} type='submit'>Submit</button>

            <div className={s.area}>
                <input className={s.input} id='taskTitle' name='title' type='text' placeholder='Enter task title'
                       onChange={handleChange} value={values.title}/>
                <textarea className={clsx(s.input, s.textarea)} id='taskDescription' name='description'
                          placeholder='Enter task description' value={values.description} onChange={handleChange}/>
            </div>
        </form>
    );
}


export default Form;
