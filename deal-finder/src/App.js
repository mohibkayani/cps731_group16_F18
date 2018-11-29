import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import { BrowserRouter, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Home from './Home';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={UserProfile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
