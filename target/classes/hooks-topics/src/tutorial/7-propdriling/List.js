import React from "react";
import SinglePerson from "./SinglePerson";

/**
 * Instead of giving props like this
 * id={person.id} name={person.name}
 *
 * we can use short syntaxes {...person}
 */
export default ({people, removePerson}) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id}
                        removePerson={removePerson}
                        {...person}
                    />
                )
            })}
        </>
    )
}