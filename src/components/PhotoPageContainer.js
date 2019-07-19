import React, {Component} from 'react'
import { connect } from 'react-redux'
import PhotoPage from './PhotoPage';
import getPhotosByAlbum from '../actions/photos.js'

class PhotoPageContainer extends Component{    
    render (){
        console.log('HAHA:', this.props.getPhotosByAlbum())
        const albumId = this.props.match.params.id;
        const album= this.props.albums.find((album)=> album.id===parseInt(albumId))

        return <PhotoPage {...album} photos={this.props.photos} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        photos: state.photos
    }
}

export default connect(mapStateToProps)(PhotoPageContainer)