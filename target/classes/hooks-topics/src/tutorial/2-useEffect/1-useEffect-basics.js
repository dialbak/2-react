import React, {useState, useEffect} from "react";

export default () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("call use effect")
        if (value > 0) {
            document.title = `New Messages(${value})`;
        }
    })

    const handleIncrement = () => setValue(value + 1)

    console.log('render component');

    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={handleIncrement}>
                click me
            </button>
        </>
    )
}