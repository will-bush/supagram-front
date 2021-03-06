import React, {useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const handleFormSubmit = (event) => {
      event.preventDefault();
    console.log(file);
  }

  const [file, setFiles] = useState('');
  const addFile = e => {setFiles(e.target.value)
  };

  const [caption, setCaption] = useState('');

  const addCaption = e => {setCaption(e.target.value);
};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add a new post
        </Typography>
        <form className={classes.form} noValidate>
          <input
          type="file"
          onChange={addFile}
          value={file}
          >
          </input>
          <TextField
            onChange={addCaption}
            value={caption}
            variant="outlined"
            margin="normal"
            fullWidth
            name="caption"
            label="caption"
            type="text"
            id="caption"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Post
          </Button>
          <input
          type="submit"
          onClick={event => handleFormSubmit(event)}></input>
        </form>
      </div>
    </Container>
  );
}