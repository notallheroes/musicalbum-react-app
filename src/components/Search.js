import * as axios from "axios"
import React, { useEffect, useState } from "react";
import Preloader from "./common/Preloader";
import style from "./css/Search.module.css"
import Music from "./Music";
import useDebounce from "./useDebounce"

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const search = searchValue => {
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchValue}&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json`)
      .then(response => { 
         props.dispatch({
          type: "SEARCH_MUSIC_SUCCESS",
          payload: response.data.results.albummatches.album
        })
     })}
  const debouncedSearchTerm = useDebounce(searchValue, 500);

const handleSearchInputChanges = (e) => {
    props.dispatch({type: "SEARCH_MUSIC_REQUEST"})
    setSearchValue(e.target.value)
    e.preventDefault()
}

useEffect(() => {
  if (debouncedSearchTerm) {
    search(debouncedSearchTerm)
  } else { 
    props.dispatch({type: "SEARCH_MUSIC_SUCCESS", payload: []}) } 
  }, [debouncedSearchTerm] )
       
  if ( props.showSearch  ) { return (
    <div className={style.wrapperSearch}>
      <form className={style.form}>
        <input
          className={style.search}
          placeholder="Search for Album..."
          value={searchValue}
          onChange={handleSearchInputChanges}
          onFocus={(e)=>{props.dispatch({type: "SHOW_IT"})}}
          type="text"
        />
        <div className={style.preloader}>{props.loading ? <Preloader /> : null}</div>
      </form>
      <Music id={props.id} music={props.music} dispatch={props.dispatch} showIt={props.showIt} />
      </div>
    )
  } else { return null }
}

export default Search;




