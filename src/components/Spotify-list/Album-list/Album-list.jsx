import React, { Component } from 'react'
import './Album-list.scss'
import AlbumListItem from '../Album-item/Album-item'
import { connect } from 'react-redux'
import { AlbumSelect } from '../redux/actions'

class AlbumList extends Component {
  render() {
    console.log(this.props)
    const { albums, albumSelect, albumListState } = this.props
    if (!albumListState) {
      return null
    }

    if (!this.props.albums) {
      return null
    }
    const albumItems = albums.map(album => {
      return <AlbumListItem
        key={album.id}
        Album={album}
        albumSelect={albumSelect}
      />
    })
    return (
      <ul className="album-list">
        {albumItems}
      </ul>
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
    albumSelect: album => dispatch(albumSelect(album))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)