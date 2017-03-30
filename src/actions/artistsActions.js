import Axios from 'axios';


// Sync Action
export const searchArtistsSuccess = (artists) => {
  return {
    type: 'SEARCH_ARTISTS_SUCCESS',
    artists
  }
};
//Async Action
export const searchArtists = (str) => {
const apiUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=10&type=artist&market=US';
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(searchArtistsSuccess(response.data.artists.items))
      })
      .catch(error => {
        throw(error);
      });
  };
};


// to get given artist all album page


export const searchArtistSuccess = (artist) => {
  return {
    type: 'SEARCH_ARTIST_SUCCESS',
    artist
  }
};





  // var albumsUrl = 'https://api.spotify.com/v1/artists/'+id+'/albums';
 


export const searchArtist = (id) => {

  var artistUrl = 'https://api.spotify.com/v1/artists/'+id;
  var albumsUrl = 'https://api.spotify.com/v1/artists/'+id+'/albums';


   function getAlbums(){
        return Axios.get(albumsUrl)
    }
      
    function getArtists(){
      return  Axios.get(artistUrl)
    }
  return (dispatch) => {
    return Axios.all([getAlbums(), getArtists()])
      .then(Axios.spread((acct, perms) =>{
        dispatch(searchArtistSuccess({
          albums:acct.data.items,
          images:perms.data.images,
          genres:perms.data.genres,
          artist:perms.data.name
        }))
      }))
      .catch(error => {
        throw(error);
      });
  };
};






 