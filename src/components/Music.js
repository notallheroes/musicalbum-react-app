import React from "react";
import Album from "./Album";
import style from "./css/Music.module.css"

const Music = (props) => {

  if (props.music.length == 0) {
    return null
  } else if (props.showIt == true) {
    return (
      <div className={style.musicWrapper}>
        {props.music.slice(0,5).map((music, index) => (<Album key={`${index}-${music.name}`} music={props.music[index]} dispatch={props.dispatch} id={props.id} />))}
      </div>
    ) 
  } else { return null}
};

export default Music