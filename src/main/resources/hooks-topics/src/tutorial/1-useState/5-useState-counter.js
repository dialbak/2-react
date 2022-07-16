import React, {useState, useEffect} from "react";

export default () => {
    const [value, setValue] = useState(0)

    const reset = () => setValue(0)

    const complexIncrease = () => {
        setTimeout(() => {
            setValue(value + 1)
            return value
        }, 1000)
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>
                    decrease
                </button>
                <button className='btn' onClick={reset}>
                    reset
                </button>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    increase
                </button>
            </section>
            <section style={{margin: '4rem 0'}}>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>
                    increase later
                </button>
            </section>
        </>
    )
}