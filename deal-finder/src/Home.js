import React, { Component } from 'react';
import SearchM from './SearchM';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

class Home extends Component {
    join = () => {
        alert("Joined mailing list succesfully");
      };
    render() {
        return (
            <div>
                        <div>

        </div>
        <div className="App-header">
        <h3>Welcome to deal finder, a platform to provide fast access to shopping deals online.</h3>
          <h4>Start by typing an item in search deals below</h4>
          <SearchM></SearchM>
          </div>
          <br></br>
      <br/>
      <br></br>
      <br/>      <br></br>
      <br/>
      <br></br>
      <br/>
          <br/> <br/> <br/>

          You can also join our mailing list for more great deals by entering your email below:

                <br/>
        <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="email"
          startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
          }
        />
      </FormControl>
      <br></br>
      <br/>


       <Button onClick={this.join} variant="contained" color="primary">
        Join mailing list
      </Button>

            </div>
        );
    }
}

export default Home;