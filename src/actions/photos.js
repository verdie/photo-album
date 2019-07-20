import * as request from "superagent";

export const SET_PHOTOS ='SET_PHOTOS'


export function setPhotos(photos) {
    return {
      type: SET_PHOTOS,
      payload: photos
    }
}

export function getPhotosByAlbum(albumId) {
    return function (dispatch) {
        request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
          .then(res => {
            console.log('my res:', res.body)
            dispatch(setPhotos(res.body))
          })
    }
  }