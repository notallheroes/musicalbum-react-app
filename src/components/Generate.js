import React, { useRef} from "react"
import style from "./css/Generate.module.css"

const Generate = (props) => {
    const changePhoto = () => {
        props.dispatch({type: "CHANGE_PHOTO"})
    }
const buttonRef = useRef(null)
       
         
    if (props.showButton == true) {
         const scrollToBottom = () => {
            buttonRef.current.scrollIntoView({ behavior: "smooth" });
          }
        setTimeout(scrollToBottom, 100)
        return (
            <>
                <button ref={buttonRef} onClick={changePhoto} className={style.button}>Generate Swag</button>
            </>
        ) 
    } else if (props.showDescription == true) { return <div className={style.description}>Don't forget to screenshot your swag.
    It will be discarded once you leave this page.</div>}
    else {return null}
}

export default Generate