import { combineReducers } from 'redux';
import { GET_USERS, GET_USER } from '../actions/types';

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
    default:
      return state
  }
}

const reducers = combineReducers({ users });

export default reducers;