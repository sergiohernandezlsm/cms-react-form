import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import { createUserThunk } from '../thunks/users';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  fieldStyle: {
    width: '100%',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const newUser = (name, lastName, email) => {
    const data = {
      firstName: name,
      lastName: lastName,
      email: email
    }
    dispatch(createUserThunk(data));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField onChange={(e) => setName(e.target.value)} className={classes.fieldStyle} id="outlined-basic" label="First Name" variant="outlined" />
            <TextField onChange={(e) => setLastName(e.target.value)} className={classes.fieldStyle} id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField onChange={(e) => setEmail(e.target.value)} className={classes.fieldStyle} id="outlined-basic" label="Email" variant="outlined" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => newUser(name, lastName, email)}
            >
              Save
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
