import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

class Signup extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <h3>Register a new account</h3>
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
      <TextField
        id="input-with-icon-textfield"
        type="password"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          ),
        }}
      />
            <br></br>
      <br/>
        <TextField
        id="input-with-icon-textfield"
        type="password"
        label="Re enter password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          ),
        }}
      />
     
      <br/> <br/>


       <Button href="/login" variant="contained" color="primary">
        Register
      </Button>
            </div>
        );
    }
}

export default Signup;