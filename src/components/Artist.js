import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as artistsActions from '../actions/artistsActions';
import ArtistTemplent from './ArtistTemplent';
import Loading from './Loading';


  
class Artist extends React.Component {
  constructor(){
    super()
  }
  componentWillMount(){

    let id = this.props.params.id;
    this.props.searchArtist(id);
            
  }
  componentDidMount(){
    
  }

  render() {

    const myArtist= this.props.artist;
    var  inSure = '';
    inSure = myArtist 
    return (
    <div>
      <ArtistTemplent
     inSure={inSure} />  
   </div>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    artist: state.artist
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    searchArtist: id => dispatch(artistsActions.searchArtist(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);














