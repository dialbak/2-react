import React, {useState} from "react";
import {data} from "../../data";

/**
 * on click button
 * remove item into the array
 * and set a state with the new array
 * @returns {JSX.Element}
 */
export default () => {

    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((person) =>  person.id !== id)
        setPeople(newPeople)
    }

    return (
        <div>
            {
                people.map(({id, name}) => {
                    return (
                        <div key={id} className='item'>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>remove</button>
                        </div>
                    );
                })
            }
            <button className={"btn"} onClick={() => setPeople([])}>
                Clear items
            </button>
            <button className={"btn"} onClick={() => setPeople(data)}>
                Reload data
            </button>
        </div>
    )
}