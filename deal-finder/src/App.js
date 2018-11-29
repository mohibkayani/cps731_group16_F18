import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import SearchM from './SearchM';
import UserProfile from './UserProfile';


const styles = {
  root: {
    top: -69,
    width: 600
  },
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <div>
        <br></br>
        <h3>Welcome to deal finder, search deals below</h3>
      </div>
      <div className="App-header">
        <SearchM style={styles.root}></SearchM>
        <UserProfile/>

        </div>
      
      </div>
    );
  }
}

export default App;
