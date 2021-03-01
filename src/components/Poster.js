import React from "react"
import "./css/Poster.css"
import POSTER_DEFAULT from "./common/default.png"


const Poster = (props) => {
    if (props.poster == null) {
        return (
            <div className="box">
                <img src={POSTER_DEFAULT} />
            </div>
        )
    } else {
        return (
            <div className="box">
                <img src={props.poster} />
            </div>
        )
    }
}
export default Poster