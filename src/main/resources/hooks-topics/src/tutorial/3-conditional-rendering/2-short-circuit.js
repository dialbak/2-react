import React, {useState} from "react";

export default () => {

    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    return (
        <>
            <h1>{text || 'john doe'}</h1>
            <button className='btn' onClick={() =>(
                setIsError(!isError),
                setText("Error")
            )}>
                toggle error
            </button>
            {isError && <h1>Error...</h1>}
            {isError ? <p>there is an error...</p> : <h2>there is no error</h2>}
        </>
    )
}