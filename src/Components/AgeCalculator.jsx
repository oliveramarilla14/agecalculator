import React, { useState } from 'react';
import Details from "./Details";
import Form from "./Form";
import "./AgeCalculator.css"

const initialDate = {
    day: "--",
    month: "--",
    year: "--",

}

function AgeCalculator() {
const [ageForm, setAgeForm] = useState(initialDate)

 
    return (
        <div className="age-calculator">
            <Form setAgeForm={setAgeForm}/>
            <Details ageForm={ageForm}/>
        </div>
    )
}

export default AgeCalculator;