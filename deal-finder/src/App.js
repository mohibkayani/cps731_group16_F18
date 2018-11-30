import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import { BrowserRouter, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Home from './Home';
import Login from './Login';
import Categories from './Categories';
import Signup from './Signup'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/login" component={Login} />
        <Route path="/categories" component={Categories} />
        <Route path="/signup" component={Signup} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
