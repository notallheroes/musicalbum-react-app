import React from "react"
import style from "./css/Footer.module.css"


const Footer = (props) => {
    return (
        <>
            <div className={style.created}>
                Created By: <a className={style.peksfeks} href="https://vk.com/peksfeks1">@notallheroes</a>
            </div>
            <div className={style.powered}>
                Powered <a className={style.lastfm} href="">Last.fm</a>
            </div>
            <div className={style.copyright}>
                <div>® 2020 Sonya Grigorenko Swag</div>
                <div>All rights reserved</div>
            </div>
        </>
    )
}

export default Footer