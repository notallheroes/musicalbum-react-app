import React, { useReducer } from "react"
import './App.css';
import sonyaPreview from "./components/common/sonyaPreview.png"
import Sonya from "./components/common/sonya.png"
import Search from './components/Search';
import Header from "./components/Header"
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Generate from "./components/Generate"


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
  photoDisabled: false,
  preloaderButton: false
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
      function nextId(id) {
        let num = Number(id)
        if (num < 3) { return num + 1 } else { return num - 3 }
      }
      function showButton(array, show) {
        if (array.every(checkNull)) { return show = true } else { return show }
      }
      return {
        ...state,
        poster: addPoster(state.poster, action),
        showIt: false,
        showButton: showButton(state.poster, state.showButton),
        id: nextId(state.id)
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
        photoDisabled: true,
        preloaderButton: true
      }
    case "HANDLE_SEARCH":
      return {
        ...state,
        searchInput: action.search
      }
    case "OFF_LOADER":
      return {
        ...state,
        preloaderButton: false
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { music, loading, photo,
    poster, id, showIt,
    showButton, showDescription, showSearch,
    searchInput, photoDisabled, preloaderButton } = state;

  return (
    <div className="App">
      <Header />
      <Search loading={loading} id={id} music={music} dispatch={dispatch} showIt={showIt} showSearch={showSearch} searchInput={searchInput} />
      <Photo dispatch={dispatch} id={id} poster={poster} photo={photo} photoDisabled={photoDisabled} />
      <Generate showButton={showButton} showDescription={showDescription} dispatch={dispatch} showLoader={preloaderButton} />
      <Footer />

    </div>
  )
}

export default App;
