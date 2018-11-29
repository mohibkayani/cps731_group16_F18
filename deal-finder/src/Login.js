import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


class Login extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                Login:
                <br/>
                <br/>
        <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <br></br>
      <br/>
      <TextField
        id="input-with-icon-textfield"
        type="password"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <br/> <br/>
        Forgot password? Enter email below to retrieve a new one.
            <br></br>
      <br/>
      <TextField
        id="input-with-icon-textfield"
        type="text"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          ),
        }}
      />
      <br/> <br/>


       <Button href="/profile" variant="contained" color="primary">
        Login
      </Button>
            </div>
        );
    }
}

export default Login;