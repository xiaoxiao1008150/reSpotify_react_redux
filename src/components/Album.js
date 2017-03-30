import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class Album extends React.Component {

  constructor(){
    super()
    this.state={
      artist:[],
      name:null,
      date:null,
      items:[],
      url:null,
      image_url:null
    }
  }
  componentWillMount(){

    let id = this.props.params.id;
    let url = 'https://api.spotify.com/v1/albums/'+id;
    axios.get(url)
          .then(function (response) {
            console.log(response);
            let album = response.data;
            console.log('items',album.tracks.items);
            this.setState({
              artist:album.artists,
              name:album.name,
              date:album.release_date,
              items:album.tracks.items,
              url:album.external_urls.spotify,
              image_url:album.images[0].url
            })
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
  
            
  }
  render() {
      
    

    return (
      <div id="album">
        <header className="album-header">
          <div className="row">
            <div className="col-sm-4">
                <div>
                    <img style={{width:100,height:100,borderRadius:'50%'}} className="album-thumb" src={this.state.image_url} />
                </div>
            </div>
          <div className="col-md-8">
              {this.state.name}
              {this.state.artist.map(item=>(
                 <h4><span>{item.name}</span></h4>
              ))}
              <h5>Release Date: {this.state.date}</h5>
          </div>    
         </div>    
      </header>
    
    <div className="album-tracks">
        <h2>Album Tracks</h2>
        {
          this.state.items.map((item)=>(
          <div>
              <div className="well">
                  <h5>{item.track_number} - {item.name}</h5>
                  <a href={item.preview_url} target="_blank">Preview Track</a>    
              </div>    
          </div>))
        }

    </div> 
    </div>
      
    );
  }
}



export default Album;


