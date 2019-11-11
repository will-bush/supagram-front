import React, { Component } from 'react';
import API from "../../adapters/API"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class SignUpForm extends Component {
  state = {
    name: "",
    username: "",
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
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      <form>
        <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            autoFocus
            />
        <TextField
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Please choose a username"
            autoFocus
        />
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
            label="Email"
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
            id="password"
            label="Password"
            autoFocus
        />
        <Button
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button>
      </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  signUp = event => {
    event.preventDefault();
    API.signUp(this.state);
  }

}

export default SignUpForm;