import React, { Component } from 'react';
import API from "../../adapters/API"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import './SignInForm.css';

export class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  }
  
  render() {

    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Supagram
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        {/* <Avatar >
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography className="title" component="h1" variant="h5">
          Sign in
        </Typography>
      <form>
          <TextField
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            />
        <TextField
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          onClick={this.signIn}
          fullWidth
          variant="contained"
          color="primary">
          Sign in</Button>
      </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  signIn = event => {
    event.preventDefault();
    API.signIn(this.state)
      .then(data => localStorage.setItem("token", data.token))
      .catch(console.error)
  }
}

export default SignInForm;