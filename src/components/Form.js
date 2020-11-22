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

const BasicTextFields = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const addUser = () => {
    dispatch(createUserThunk({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email
    }));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TextField value={state.firstName} name="firstName" onChange={handleChange} className={classes.fieldStyle} id="outlined-basic" label="First Name" variant="outlined" />
            <TextField value={state.lastName} name="lastName" onChange={handleChange} className={classes.fieldStyle} id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField value={state.email} name="email" onChange={handleChange} className={classes.fieldStyle} id="outlined-basic" label="Email" variant="outlined" />
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
              onClick={addUser}
            >
              Save
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}

export default BasicTextFields;