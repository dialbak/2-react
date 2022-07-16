import React, {useState} from "react";
import {personData} from "../../data";

/**
 * on click update the state, witch is an object
 * The original object personData is not mutate { ... (operator rest) }
 * @returns {JSX.Element}
 */
export default () => {
    const [person, setPerson] = useState(personData)

    const changeMessage = () => {
        setPerson({...person, message: `Hello ${name}`})
        console.log(personData)
        console.log(person)
    }

    const {name, age, message} = person
    return (
        <>
            <h5>{name}</h5>
            <h5>{age}</h5>
            <h5>{message}</h5>
            <button className='btn' onClick={changeMessage}>
                change message
            </button>
        </>
    )
}