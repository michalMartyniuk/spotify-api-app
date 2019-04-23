import { SPOTIFY_RESULTS, ALBUM_SELECT } from './actionTypes'
import { spotifySearch } from '../../Spotify/redux/actions'

export const spotifyResults = albums => ({
  type: SPOTIFY_RESULTS,
  payload: albums
})

export const albumSelect = album => dispatch => {
  dispatch(spotifySearch(album.title))
  dispatch({
    type: ALBUM_SELECT,
    payload: album
  })
}