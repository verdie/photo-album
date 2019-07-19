import {ADD_ALBUM} from '../actions/addalbum'
import {SET_ALBUMS} from '../actions/albums'

export default (state = [], action = {}) => {
    switch(action.type){
    case ADD_ALBUM:
        return [...state, action.payload]
    
    case SET_ALBUMS:
        return action.payload.map((album)=>({...album}))
    
    default: return state
    }

    
    
}