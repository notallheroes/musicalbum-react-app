import React from "react"
import style from "./css/Header.module.css"
import HEADER from "./common/header.png"


const Header = (props) => {
    return (
        <header>
            <img className={style.headerPicture} src={HEADER} />
        </header>
    )
}
export default Header