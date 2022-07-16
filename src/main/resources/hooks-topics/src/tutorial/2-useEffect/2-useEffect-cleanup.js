import React, {useState, useEffect} from 'react';

/**
 * On useEffect call function when event is catch
 * @returns {JSX.Element}
 *
 * Always remove listener after use
 */
export default () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSize = () => setSize(window.innerWidth)

    useEffect(() => {
        console.log("useEffect")
        window.addEventListener("resize", checkSize)

        return () => {
            console.log("clean up")
            window.removeEventListener("resize", checkSize)
        }
    }, [])

    console.log("render")

    return (
        <>
            <h2>window</h2>
            <h2>{size}</h2>
        </>
    )
}