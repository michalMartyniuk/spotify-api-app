import React, { Component } from 'react'
import './App.scss'
import Buttons from './Buttons/Buttons'
import Spotify from './Spotify/Spotify'
import AlbumList from './'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    // this.props.searchVideos(this.props.search.value)
  }

  render() {
    console.log(this.props)
    // const { videoSelected } = this.props.youtube
    // const { wikipediaState, videoListState } = this.props.buttons
    return (
      <div className="App">
        <Spotify />
        {/* <SearchField /> */}
        <AlbumDetail video={videoSelected} />
        {/* <Buttons /> */}
        {/* <Select /> */}
        {/* <Wikipedia /> */}
        <AlbumList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    // searchVideos: searchEntry => dispatch(searchVideos(searchEntry)),
    // wikipediaSearch: searchEntry => dispatch(wikipediaSearch(searchEntry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
