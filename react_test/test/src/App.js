import React, { Component } from 'react';
import login from './container/login';

class App extends Component {
  render() {
    return (
      <div className="App">
          <login user = "" dispatch = { dispatch } />
      </div>
    );
  }
}

export default App;
