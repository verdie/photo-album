import {SET_PHOTOS} from '../actions/photos.js'

export default (state = [], action = {}) => {
    switch(action.type){
    case SET_PHOTOS:
        return action.payload.map((album)=>({...album}))
    
    default: return state
    }

    
    
}