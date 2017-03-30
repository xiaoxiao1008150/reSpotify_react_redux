import React from 'react';
import axios from 'axios';
import { Link} from 'react-router';
import TestComponent from './Test';

class ArtistTemplent extends React.Component {
  constructor(){
    super()
  }
  
  componentDidMount(){
      console.log('lddoading',this.props.inSure)       
  }

  render() { 
    const {genres,albums,images,artist} = this.props.inSure
    console.log(genres)
    if(genres){
       var genreList = genres.map((item,i) =>(
        <span key={i}>{item}</span>
      ))
    }
   
    return (
      <div>
        <div>
            <header className="artist-header">
             <TestComponent artist={artist} images={images}/>
          </header>
          <p>Genres:
            {genreList}
          </p> 
          <div className="artist-albums" >
              <div className="row">
                  {albums.map((item) =>
                  (
                  <div key={item.id}>
                      <div className="col-sm-4">`
                          <div className="well album">
                          {(item.images) ? (
                              <div style={{textAlign:'center'}}>
                                  <img style={{maxWidth:'50%'}} className="img-thumbnail" src={item.images[0].url} />    
                                  <h4>{item.name}</h4>
                                  <Link className="btn btn-default btn-block" to={'/album/'+ item.id}>Album Details</Link>
                              </div> 
                            ) :('')}    
                           </div>    
                      </div>
                  </div> ))}   
              </div>    
          </div>
    
      </div>  
    </div> 
     
    )
  }
}



export default ArtistTemplent;
