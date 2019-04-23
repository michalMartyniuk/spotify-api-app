import { SPOTIFY_RESULTS, ALBUM_SELECT } from './actionTypes'

export const spotifyListReducer = (state = {
  albums: [],
  albumSelected: null,
}, action) => {
  switch (action.type) {

    case SPOTIFY_RESULTS:
      const albums = action.payload
      return {
        ...state,
        albums,
        albumSelected: albums[0],
      }

    case ALBUM_SELECT:
      const album = action.payload
      return {
        ...state,
        albumSelected: album,
      }

    default:
      return state
  }
}