import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
import { helloWorld } from '../actions/test'
import {addalbum} from '../actions/addalbum'
import {setAlbums} from '../actions/albums'
import {getAlbums} from '../actions/albums'
import { bindActionCreators } from 'redux';



// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )  

class AlbumsListContainer extends React.Component {
  state = {}

//   componentDidMount() {
    
//     // this.props.helloWorld('Alice', 'Seriously Alice')
//     this.props.addalbum( 5, 'Enjoying sunshine')
//     this.props.addalbum( 10, 'Having fun in the US')
//     // this.props.dispatch(helloWorld('HO','LO'))
//     request('https://jsonplaceholder.typicode.com/albums')
//       .then(response => this.setState({ albums: response.body })
      
//       )
//   }
    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        .then(res => this.props.getAlbums())
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
    return {
      albums: state.albums
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ setAlbums, getAlbums, addalbum }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer)