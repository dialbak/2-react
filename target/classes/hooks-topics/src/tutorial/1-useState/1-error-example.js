import React, {useState} from "react";

/**
 * onclick button use set state
 * to change state value
 * @returns {JSX.Element}
 */
export default () => {
    const [errorMess, setErrorMess] = useState(false)

    const handleClick = () => setErrorMess(!errorMess)
    return (
        <div>
            {
                <p>{errorMess ? "it's ok" : "error"}</p>
            }

            <button type='button' className='btn' onClick={handleClick}>
                dispatch error
            </button>
        </div>
    )
}