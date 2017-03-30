// Set up your root reducer here...
import { combineReducers } from 'redux';
import {artistsReducer,artistReducer} from './artistsReducer'
// import {cartReducer} from './cartReducers'

export default combineReducers({
  artists: artistsReducer,
  artist: artistReducer,
  // albums:albumsReducer
});