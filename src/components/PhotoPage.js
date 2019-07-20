import React, {Component} from 'react'

export default class PhotoPage extends Component{
    render(){
        return <div>
            <h1>{this.props.title}</h1>
            {this.props.photos.map((photo)=>{
                return <img src={photo.url} alt=''/>
            })}
        </div>
    }
}