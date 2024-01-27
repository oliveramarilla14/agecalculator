import React, { useState } from 'react';
import arrow from '../assets/images/icon-arrow.svg'



function Form({ setAgeForm }) {
    const today = new Date()
    const [date, setDate] = useState({});
    const [error, setError] = useState([false, false, false]);

    const handleChange = (e) => {
        const form = e.target.parentElement.parentElement
        const targetName = e.target.name

        if (e.target.value === "") {
            setDate({
                ...date,
                [e.target.name]: "--"
            })
        }else if(false){

        } else{
            e.target.classList.remove("error")

            let errorCheck = [...error]
            errorCheck[[...form.elements].indexOf(e.target)] = false
            setError(errorCheck)
            
            setDate({
                ...date,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        let errorCheck = []

        for (let i = 0; i < e.target.elements.length; i++) {
           
            if (e.target[i].nodeName === "INPUT") {
                if (e.target[i].value === "") {
                    e.target[i].classList.add("error")
                    errorCheck[i] = true
                }else{
                    errorCheck[i] = false
                }
            }
            setError(errorCheck)
        }

        if (!error.includes(true)){
            setAgeForm(date)
        } 
        alert("enviado")
    }

    return (
        <form className="age-form" onSubmit={handleSubmit}>
            <label htmlFor="day" >
                Day
                <input type="number" id="day" name="day"  placeholder="DD" min="1" max="31" onChange={handleChange} />
                {error[0] && <small>This field is required</small>}
            </label>
            <label htmlFor="month">
                Month
                <input type="number" id="month" name="month"  placeholder="MM" min="1" max="12" onChange={handleChange} />
                {error[1] && <small>This field is required</small>}
            </label>

            <label htmlFor="year">
                Year
                <input type="number" id="year" name="year" placeholder="YYYY" min="1" max={today.getFullYear()} onChange={handleChange} />
                {error[2] && <small>This field is required</small>}
            </label>

            <button type="submit" > <img src={arrow} /></button>
        </form>
    )
}

export default Form;