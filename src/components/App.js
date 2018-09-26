import React, { Component } from 'react';
import IndexPost from './IndexPost';
import Router from './Router';
import '../App.css';

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="App">
              <h2>Welcome to the blog app!</h2>
              {' '}
              <Router />
              {' '}
          </div>
        <IndexPost />
      </React.Fragment>
    );
  }
}

export default App;
