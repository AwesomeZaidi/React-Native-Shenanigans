// src/redux/reducers/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_ERROR,
  HANDLE_LOGOUT, LOAD_DATA } from "../constants/action-types";

const initialState = {
  user: "not set yet.",
  error: false
};

function rootReducer(state = initialState, action) {
  console.log('state in rootReducer:', state);

  switch(action.type) {
    case LOAD_DATA:
      console.log('action.payload:', action.payload);
      return action.payload
    case HANDLE_LOGIN:
      return {...state, user: action.payload}
    case HANDLE_SIGNUP:
      return {...state, user: action.payload}
    case HANDLE_ERROR:
      return {...state, error: action.payload}
    case HANDLE_LOGOUT:
      return {...state, user: "", restaurant: "", error: false}
    default: 
        return state;
  }
};

export default rootReducer;