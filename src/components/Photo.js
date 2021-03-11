import React from "react"
import "./css/Photo.css"

import Poster from "./Poster";

const Photo = (props) => {

  const addActiveClick = (e) => {
    return props.dispatch({ type: "ADD_ACTIVE", id: e.currentTarget.id })
  }
  const showLoaderOff = () => {
    props.dispatch({type:"OFF_LOADER"})
  }
  return (

    <div className={props.photoDisabled == true ? ("picture pictureDisabled") : ("picture")}><img className="photo" onLoad={showLoaderOff} src={props.photo} />
      <div id="0" onClick={addActiveClick} className={props.id == 0 ? ("poster active first") : ("poster first")} ><Poster poster={props.poster[0]} /></div>
      <div id="1" onClick={addActiveClick} className={props.id == 1 ? ("poster active second") : ("poster second")}><Poster poster={props.poster[1]} /></div>
      <div id="2" onClick={addActiveClick} className={props.id == 2 ? ("poster active third") : ("poster third")}><Poster poster={props.poster[2]} /></div>
      <div id="3" onClick={addActiveClick} className={props.id == 3 ? ("poster active fourth") : ("poster fourth")}><Poster poster={props.poster[3]} /></div>
    </div>


  )
}

export default Photo