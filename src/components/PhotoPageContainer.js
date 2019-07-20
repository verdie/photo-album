import React, {Component} from 'react'
import { connect } from 'react-redux'
import PhotoPage from './PhotoPage';
import {getPhotosByAlbum} from '../actions/photos.js'
import request from 'superagent'

class PhotoPageContainer extends Component{    
    componentDidMount() {
       // request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        
        // .then(res => {console.log(res.body)
        //     return this.props.getPhotosByAlbum()
        // })
        return this.props.getPhotosByAlbum(this.props.match.params.id)
  }
    render (){
        console.log('this.props.photos test:', this.props.photos)
        
        const albumId = this.props.match.params.id;
        const album= this.props.albums.find((album)=> album.id===parseInt(albumId))

        console.log('this.props.photos test:',(this.props.photos))

        return <PhotoPage {...album} photos={this.props.photos} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        photos: state.photos
    }
}
//const mapDispatchToProps = dispatch =>  getPhotosByAlbum();
export default connect(mapStateToProps,{getPhotosByAlbum})(PhotoPageContainer)