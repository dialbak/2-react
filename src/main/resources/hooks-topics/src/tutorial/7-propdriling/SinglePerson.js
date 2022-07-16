import React from "react";

export default ({id, name, removePerson}) => {
    return (
        <div className={"item"}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}