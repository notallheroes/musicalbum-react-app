import React from "react"
import preloader from "./gifka.gif"
import style from "./Preloader.module.css"


const Preloader = () => {
   return <div>
        <img className={style.image} src={preloader}/>
    </div>
}

export default Preloader