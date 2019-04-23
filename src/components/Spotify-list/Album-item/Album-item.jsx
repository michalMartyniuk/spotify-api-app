import React from 'react'
import './Album-item.scss'

const AlbumListItem = ({ album, albumSelect }) => {
  const imageUrl = album.thumbnails.medium.url
  return (
    <li onClick={() => albumSelect(album)} className="album-item">
      <img src={imageUrl} alt="" />
      <div className="album-item__text-wrapper">
        <h3 className="album-item__title">{album.title}</h3>
        <p className="album-item__description">{album.description}</p>
      </div>
    </li>
  )
}

export default AlbumListItem