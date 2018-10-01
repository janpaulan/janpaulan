import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
