import React from 'react';


class NavbarTemplent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">ngSpotify</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/" >Home</a></li>
            <li><a href="about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}



export default NavbarTemplent;
