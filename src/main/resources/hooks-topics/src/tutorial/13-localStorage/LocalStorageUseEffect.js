import React, {useState, useEffect} from 'react';

function useLocalStorageState(key, defaultValue = "initialLocalStorageValue") {

    const [state, setState] = useState(
        () => window.localStorage.getItem(key) || defaultValue
    )

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state, setState])

    return [state, setState]
}

export default () => {
    // [state, setState] === [name, setName]

    const [name, setName] = useLocalStorageState('name')
    const handleChange = event => setName(event.target.value)

    return (
        /*inline style*/
        <div >
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name"/>
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    );
}

