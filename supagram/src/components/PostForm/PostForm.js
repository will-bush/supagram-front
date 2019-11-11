import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './PostForm.css';

import API from "../../adapters/API"

export class PostForm extends Component {
  render() {
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" className="title">
          Add a new post
        </Typography>
      <form onSubmit={this.handleSubmit}>
        <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="caption"
        label="caption"
        type="text"
        id="caption"
        />
        <label htmlFor="image" >
          Upload image
          
        </label>
        <input
            type="file"
            name="image"
            accept="image/*"
             />
        <Button
            type="submit"
            value="Submit"
            fullWidth
            variant="contained"
            color="primary"
            >Submit</Button>
      </form>
      </div></Container>
    );
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    API.submitPost(formData)
      .then(console.log)
      .catch(console.error);
  }
}

export default PostForm;