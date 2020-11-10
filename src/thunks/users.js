import axios from 'axios';
import { getUsers, getUser } from '../actions';

export const getUsersThunk = () => async dispatch => {
  const { data } = await axios.get(`http://localhost:8080/users`);
  dispatch(getUsers(data));
};

export const getUserThunk = (userId) => async dispatch => {
  const { data } = await axios.get(`http://localhost:8080/users/${userId}`);
  dispatch(getUser(data));
};
