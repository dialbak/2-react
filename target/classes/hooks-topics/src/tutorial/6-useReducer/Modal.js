import React, {useEffect} from "react";

export default ({modalContent, closeModal}) => {

    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000)
    })

    return (
        <div className={"modal"}>
            <p>{modalContent}</p>
        </div>
    )
}