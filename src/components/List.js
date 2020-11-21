import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersThunk, getUserThunk } from '../thunks/users';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataRedux = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsersThunk());
    dispatch(getUserThunk(4));
  }, [dispatch]);

  const editUser = (user) => {
    console.log(`this is the user => ${user}`);
  }

  return (
    <Fragment>
      {dataRedux.map(user => (
        <div className={classes.root} key={user.id}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>{`${user.firstName} ${user.lastName} - ${user.email}`}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onClick={() => editUser(user.id)}
                >
                  Edit
                    </Button>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
            </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      ))}

    </Fragment>
  );
}

export default App;