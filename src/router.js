import React from 'react';
import { Router, Route,IndexRoute,browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import About from './components/About';
import Artist from './components/Artist';
import Album from './components/Album';
// import { Provider } from 'react-redux';

// import store from './store';

export default (
      <Route path='/' component={App}>
        <IndexRoute component={Search}/>
        <Route path='about'  component={About}/>
        <Route path='/artist/:id' component={Artist}/>
        <Route path='/album/:id' component={Album}/>
      </Route>
  );

// export default routers