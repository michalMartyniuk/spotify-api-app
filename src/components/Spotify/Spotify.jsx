import React from 'react'
import './Spotify.scss'
import { Component } from 'react'
import { connect } from 'react-redux'

class Spotify extends Component {

  render() {
    // const { informations, spotifyState } = this.props
    // if (!spotifyState) {
    //   return null
    // }

    // if (!informations) {
    //   return null
    // }

    let title = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Title: </span>
        <span className="spotify-info__text">placeholder</span>
      </div> : null
    let author = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Author: </span>
        <span className="spotify-info__text">placeholder</span>
      </div> : null
    let album = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Album: </span>
        <span className="spotify-info__text">placeholder</span>
      </div> : null
    let genre = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Genre: </span>
        <span className="spotify-info__text">placeholder</span>
      </div> : null
    let label = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Label: </span>
        <span className="spotify-info__text">placeholder</span>
      </div> : null
    let length = true ?
      <div className="spotify-info__wrapper">
        <span className="spotify-info__label">Length: </span>
        <span className="spotify-info__minutes">placeholder:</span>
        <span className="spotify-info__seconds">placeholder</span>
      </div> : null

    return (
      <div className="spotify-info">
        {title}
        {author}
        {album}
        {genre}
        {label}
        {length}
        <p className="spotify-info__description"></p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.spotify,
    ...state.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spotify)
