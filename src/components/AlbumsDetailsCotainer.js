import React, {Component} from 'react'
import { connect } from 'react-redux'
import AlbumsDetails from './AlbumsDetails';

class AlbumsDetailsContainer extends Component{    
    render (){
        console.log('HAHA:', this.props.match.params.id)
        const album= this.props.albums.find((album)=> album.id===this.props.match.params.id)

        return <AlbumsDetails {...album} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(AlbumsDetailsContainer)