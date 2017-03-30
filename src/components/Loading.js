import React from 'react';

class Loading extends React.Component {
  constructor(){
    super()
  }
  render() {      
    return (
    <div>
      <h1>{this.props.inSure}</h1>
    </div>
      
    )
  }
}
export default Loading;
