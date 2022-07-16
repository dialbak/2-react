import React, {useState} from "react";
import {data} from "../../data";
import List from "./List"

export default () => {

    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id )
        })
    }

    return (
        <section>
            <h3>Prop drilling</h3>
            <List
                people={people}
                removePerson={removePerson}
            />
        </section>
    )
}