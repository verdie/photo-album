import { request } from "http";

export const SET_PHOTOS ='SET_PHOTOS'


export function setPhotos(photos) {
    return {
      type: SET_PHOTOS,
      payload: photos
    }
}

export function getPhotosByAlbum(albumId) {
    return function (dispatch) {
        request('https://jsonplaceholder.typicode.com/photos?albumId=:id')
      // fetch the photos from https://jsonplaceholder.typicode.com/photos?albumId=:albumId
      // dispatch an action that is created using setPhotos
      .then(response => {
        dispatch(setPhotos(response.body))
      })
    }
  }