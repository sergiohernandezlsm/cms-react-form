import { GET_USERS } from './types';
import { GET_USER } from './types';
import { CREATE_USER } from './types';

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
