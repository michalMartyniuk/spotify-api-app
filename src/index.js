import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { spotifyReducer } from './components/Spotify/redux/reducer'
import { spotifyListReducer } from './components/Spotify-list/redux/reducer'
// import { searchReducer } from './components/Search-field/redux/reducer'
// import { selectReducer } from './components/Select/redux/reducer'
// import { buttonsReducer } from './components/Buttons/redux/reducer'
import reduxThunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    // search: searchReducer,
    spotifyList: spotifyListReducer,
    spotify: spotifyReducer,
    // select: selectReducer,
    // buttons: buttonsReducer
  }),
  applyMiddleware(reduxThunk)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
