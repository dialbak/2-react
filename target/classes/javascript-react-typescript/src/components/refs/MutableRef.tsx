import {useEffect, useRef, useState} from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }

    const startTimer = () => {
       return  interValRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => stopTimer()
    }, [])

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={()=>stopTimer()}>Stop timer </button>
            <button onClick={()=>startTimer()}>Start timer </button>
        </div>
    )
}
