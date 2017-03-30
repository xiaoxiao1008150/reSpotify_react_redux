import React from 'react';

class TestComponent extends React.Component {
  constructor(){
    super()
  }
 
  render() {  
      const style = {
        width:'80px',
        height:'80px'
      }       
    return (
    <div>
         {(this.props.images.length > 0) ? (
                 <div>
                  <img style={style} className="img-circle" src={this.props.images[0].url} />    
              </div>
              ) :('not image')}           
              <h1>{this.props.artist}</h1>          
    </div>
      
    )
  }
}
export default TestComponent;
