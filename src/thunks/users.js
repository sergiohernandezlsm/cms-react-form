import axios from 'axios';
import { getUsers, getUser, createUser, deleteUser } from '../actions';

export const getUsersThunk = () => async dispatch => {
  const { data } = await axios.get(`http://localhost:8080/users`);
  dispatch(getUsers(data));
};

export const getUserThunk = (userId) => async dispatch => {
  const { data } = await axios.get(`http://localhost:8080/users/${userId}`);
  dispatch(getUser(data));
};

export const createUserThunk = (user) => async dispatch => {
  const { data } = await axios.post(`http://localhost:8080/users`, user);
  dispatch(createUser(data));
}

export const deleteUserThunk = (userId) => async dispatch => {
  await axios.delete(`http://localhost:8080/users/${userId}`);
  dispatch(deleteUser(userId));
}
