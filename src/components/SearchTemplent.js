
import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import SearchRes from './SearchRes';
import * as artistsActions from '../actions/artistsActions';
import {debounce} from 'lodash';

class SearchTemplent extends React.Component {
  constructor(){
    super()
    this.state = {
            tracks: [],
            hasMoreItems: true,
            next: null,//pagnitation url,
            items:[]
      };
    this.handleChange = this.handleChange.bind(this)
 
  } 
  


  handleChange(e){
    e.persist();
    debounce(() => {
       let strvalue = e.target.value; 
        this.props.searchArtists(strvalue);
        console.log(this.props.artists);
    },400)()

   
    //this.props.datas.artist
    //
  }
  
  //   // //

  //   // document.getElementById('scroll').innerHTML = '';
   
        
  //   // ReactDOM.render(te, document.getElementById('scroll'));
  //   //
  //   //
  //  }


    // loadItems(page) {

    //     var self = this;
    //     var str = self.textInput.value || 'a';
    //     // var str = 'a';
    //     var baseUrl='https://api.spotify.com/v1/search?query='+str+'&offset=10&limit=10&type=artist&market=US';


    //     var url = baseUrl;
    //     if(this.state.next) {
    //         url = this.state.next;
    //     }

    //    Axios.get(url)
    //     .then(res => {
    //       console.log(res.data.artists.next)
    //       //
    //       if(res) {
    //                 var tracks = self.state.tracks;
    //                 var resp = '';
    //                 var resp = res.data.artists.items
    //                 resp.map((track) => {
    //                     tracks.push(track);//items --> tracks ,one time data push to state.tracks
    //                 });
    //                 // if 还有分页，地址 attach to state,看自己api的分页规律
    //                 if(res.data.artists.next) {
    //                     self.setState({
    //                         tracks: tracks,
    //                         next: res.data.artists.next
    //                     });
    //                 } else {
    //                   //如果没有分页了，显示没有内容
    //                     self.setState({
    //                         hasMoreItems: false
    //                     });
    //                 }
    //             }
    //       //
    //       console.log('items',this.state.tracks.length)

    //   })
    // }

  render() {
       // var loader = <div className="loader">Loading ...</div>;
       //  console.log('render',this.state.items)
       //  this.state.items = [];
       //  this.state.tracks.map((track, i) => {
       //      this.state.items.push(
       //          <div className="tro" key={i}>
       //             <SearchRes artist={track}/ >
       //          </div>
       //      );
    //    //  });
    // const {artists} = this.props
    // var list = artists.map((item,i) =>(
    //     <li key={i}>{item.name}</li>
    //   ))

    return (
      <div style={{paddingLeft:10,PaddingRight:10}}>
      <h1>Need Music?</h1>
        <p className="lead">Use the ngSpotify app to browse new releases and find your favorite songs<br /> All you get is this text and a mostly barebones HTML document.</p>
        <form>
            <div className="form-group">
                <input type="text" 
                name="searchStr"  
                ref={(input) => { this.textInput = input; }}
                onChange={this.handleChange} 
                className="form-control" 
                placeholder="Search Music..." />   
            </div>    
        </form>
        <SearchRes artists={this.props.artists}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    artists: state.artists
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    searchArtists: str => dispatch(artistsActions.searchArtists(str))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTemplent);

