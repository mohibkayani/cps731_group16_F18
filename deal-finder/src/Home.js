import React, { Component } from 'react';
import SearchM from './SearchM';

class Home extends Component {
    render() {
        return (
            <div>
                        <div>
          <br></br>
          <h3>Welcome to deal finder, search deals below</h3>
        </div>
                 <div className="App-header">
          <SearchM></SearchM>
          </div>
            </div>
        );
    }
}

export default Home;