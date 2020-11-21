import { combineReducers } from 'redux';
import { GET_USERS, CREATE_USER } from '../actions/types';

let initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    default:
      return state
  }
}

const reducers = combineReducers({ users });

export default reducers;