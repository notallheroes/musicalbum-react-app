import React, { useReducer } from "react"
import * as axios from "axios"
import './App.css';
import sonyaPreview from "./components/common/sonyaPreview.png"
import Sonya from "./components/common/sonya.png"
import Search from './components/Search';
import Header from "./components/Header"
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Generate from "./components/Generate"


const MUSIC_API_URL = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json";


const initialState = {
  photo: sonyaPreview,
  loading: false,
  music: [],
  poster: [null, null, null, null],
  showIt: true,
  showButton: false,
  showDescription: false,
  showSearch: true,
  id: 0,
  searchInput: null,
  photoDisabled: false
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MUSIC_REQUEST":
      return {
        ...state,
        loading: true,
        showIt: true
      };
    case "SEARCH_MUSIC_SUCCESS":
    
     
      return {
        ...state,
        loading: false,
        music: action.payload
      };
    case "ADD_COVER":
      function addPoster(array, action) {
        array.splice(action.id, 1, action.coverFull)
        return [...array]
      }
      function checkNull(element) {
        return element != null
      }
      function showButton(array, show) { 
        if (array.every(checkNull)) { return show = true } else { return show }
      }
     
      return {
        ...state,
        poster: addPoster(state.poster, action),
        showIt: false,
        showButton: showButton(state.poster, state.showButton)
      }
    case "ADD_ACTIVE":
      return {
        ...state,
        id: action.id
      }
    case "SHOW_IT": 
      return {
        ...state,
        showIt: true
      }
      case "CHANGE_PHOTO":
        return {
          ...state,
          id: null,
          photo: Sonya,
          showButton: false,
          showDescription: true,
          showSearch: false,
          photoDisabled: true
        }
      case "HANDLE_SEARCH": {
        return {
          ...state,
          searchInput: action.search
        }
      }
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchValue => {
    
     
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchValue}&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json`)
        .then(response => { console.log(response) 
           dispatch({
            type: "SEARCH_MUSIC_SUCCESS",
            payload: response.data.results.albummatches.album
          })
       })}
      
    

  const { music, loading, photo, poster, id, showIt, showButton, showDescription, showSearch, searchInput, photoDisabled } = state;

  return (
    <div className="App">
      <Header />
      <Search search={search} loading={loading} id={id} music={music} dispatch={dispatch} showIt={showIt} showSearch={showSearch} searchInput={searchInput} />
      <Photo dispatch={dispatch} id={id} poster={poster} photo={photo} photoDisabled={photoDisabled}/>
      <Generate showButton={showButton} showDescription={showDescription} dispatch={dispatch}  />
      <Footer />

    </div>
  )
}

export default App;
