import { GET_USERS, GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER } from './types';

export const getUsers = data => ({
  type: GET_USERS,
  users: data
});

export const getUser = data => ({
  type: GET_USER,
  user: data
});

export const createUser = data => ({
  type: CREATE_USER,
  user: data
});

export const deleteUser = data => ({
  type: DELETE_USER,
  userId: data
});

export const updateUser = data => ({
  type: UPDATE_USER,
  user: data
});
