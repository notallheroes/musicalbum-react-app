import React from "react"
import style from "./css/Footer.module.css"


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.created}>
                Created by <a className={style.peksfeks} href="https://vk.com/peksfeks1">@notallheroes</a>
            </div>
            <div className={style.powered}>
                Powered by <a className={style.git} href="https://github.com">GitHub</a> & <a className={style.lastfm} href="https://www.last.fm/">Last.fm</a>
            </div>
            <div className={style.copyright}>
                <div>® 2021 Sonya Grigorenko Swag</div>
                <div>All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer