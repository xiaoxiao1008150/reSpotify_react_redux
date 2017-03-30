
// handle search artists result --action keyup

export const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_ARTISTS_SUCCESS':
          return action.artists;
    default:
          return state;
  }
};




const initialState = {
  albums:[],
  images: [],
  genres: [],
  artist: '',
};

//handel a given artist 
export const artistReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ARTIST_SUCCESS':
          return action.artist;
    default:
          return state;
  }
};























