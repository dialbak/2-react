import React, {useState} from "react";

/**
 * onclick button use set state to change state value
 * @returns {JSX.Element}
 */
 export default () => {
    const [text, setText] = useState("Random title")

    const handleClick = () => {
        (text === "Random title") ? setText("Hello world") : setText('Random title')
    }

    return (
        <>
            <h1>{text}</h1>
            <button type='button' className='btn' onClick={handleClick}>
                change title
            </button>
        </>
    )
}