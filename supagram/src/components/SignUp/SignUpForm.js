import React, { Component } from 'react';
import API from "../../adapters/API"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SignUpForm.css';  

export class SignUpForm extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    errors: {
        fullName: '',
        email: '',
        password: '',
        username: ''
      }
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
        {/* <Avatar>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography className="title" component="h1" variant="h5">
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
            {this.state.errors.fullName.length > 0 && 
                <span className='error'>{this.state.errors.fullName}</span>}
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
        {this.state.errors.username.length > 0 && 
                <span className='error'>{this.state.errors.username}</span>}
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
        {this.state.errors.email.length > 0 && 
                <span className='error'>{this.state.errors.email}</span>}
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
        {this.state.errors.password.length > 0 && 
         <span className='error'>{this.state.errors.password}</span>}
         {this.state.errors.length > 0 ?
         <Button
            disabled
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button>
        : 
        <Button
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button> }
        {/* <Button
            onClick={this.signUp}
            fullWidth
            variant="contained"
            color="primary"
        >Sign up</Button> */}
      </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({ [event.target.name]: event.target.value });
    let errors = this.state.errors;

    switch (name) {
        case 'name': 
          errors.fullName = 
            value.length < 5
              ? 'Full Name must be 5 characters long!'
              : '';
          break;
        case 'email': 
          errors.email = 
            validEmailRegex.test(this.state.errors.email)
              ? 'Email is not valid!'
              : '';
          break;
          case 'username': 
          errors.username = 
          value.length < 5
              ? 'Username is not valid - must be 5 characters long!'
              : '';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be at least 8 characters long, etc!'
              : '';
          break;
        default:
          break;
      }
    
      this.setState({errors, [name]: value}, ()=> {
          console.log(errors)
      })
    }

  signUp = event => {
    event.preventDefault();
    API.signUp(this.state);
  }

}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


export default SignUpForm;