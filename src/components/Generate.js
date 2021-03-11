import React, { useRef } from "react"
import style from "./css/Generate.module.css"
import loaderButton from "./common/pre.svg"

const Generate = (props) => {

    const changePhoto = () => {
        props.dispatch({ type: "CHANGE_PHOTO" })
    }

    const buttonRef = useRef(null)
    if (props.showButton) {
        const scrollToBottom = () => {
            buttonRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(scrollToBottom, 100)
        return (
            <>
                <button ref={buttonRef} onClick={changePhoto} className={style.button}>Generate Swag</button>
            </>
        )
    } else if (props.showLoader) {
        return <div className={style.preloaderButton}><img src={loaderButton} /></div>
    } else if (props.showDescription) {
        return <div className={style.description}>Don't forget to screenshot your swag.
    It will be discarded once you leave this page.</div>
    }
    else { return null }
}

export default Generate