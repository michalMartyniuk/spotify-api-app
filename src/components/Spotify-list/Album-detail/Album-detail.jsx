import React from 'react'
import './album-detail.scss'

const albumDetail = ({ album }) => {

  if (!album) return null

  //Spotify url
  // const url = `https://www.youtube.com/embed/${video.id}`

  return (
    <div className="album-detail">

      <h2 className="album-detail__title">{album.title}</h2>

      <iframe
        className="album-detail__album"
        src={url}
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div >
  )
}

export default albumDetail