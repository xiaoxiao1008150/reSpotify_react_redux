import React from 'react';
import { Link} from 'react-router';


class SearchRes extends React.Component {
  render() {
    var artists = this.props.artists;
   
    if(artists){
      var reslist = artists.map((artist,i) =>(
                    <div className="row" key={i}>
                    <div className="col-md-12">
                      <div className="search-res well">
                          <h4><Link to={'/artist/' + artist.id}>{artist.name}</Link></h4> 
                          <div>
                              <strong>Genres: </strong>
                              {(artist.genres).map((subitem,index) => 
                                <span key={index}>{subitem}</span>    
                                )}
                          </div>
                      </div>    
                  </div>    
            </div>
                  ))
    }
    
   
    return (
        <div>
            {reslist}              
        </div>
    );
  }
}



export default SearchRes;
