import { combineReducers } from 'redux';
import { GET_USERS, GET_USER, CREATE_USER, DELETE_USER } from '../actions/types';

let initialState = {
  users: [],
  user: ''
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      };
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users].filter(user => user.id !== action.userId)
      };
    default:
      return state
  }
}

const reducers = combineReducers({ users });

export default reducers;