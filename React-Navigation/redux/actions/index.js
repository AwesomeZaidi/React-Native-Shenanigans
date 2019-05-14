// src/js/actions/index.js

import { HANDLE_LOGIN, HANDLE_SIGNUP, HANDLE_LOGOUT, HANDLE_ERROR, HANDLE_ADD_RESTAURANT, HANDLE_ADD_LOCATION, HANDLE_GET_ITEMS } from "../constants/action-types";
import axios from "axios";

const baseUrl = 'https://digitalmenu-intensive.herokuapp.com/';

export function login(loginState) {
    return (dispatcher) => { // read more into dispatcher
        axios.post(`${baseUrl}users/v0/login`, loginState).then((res) => {
            dispatcher(handleLogin(res.data.user)); // THUNKED IT!
        }).catch((err) => {
            dispatcher(handleLogin(true));
        });
    };
};

export const handleLogin = (user) => {
    return {
        type: HANDLE_LOGIN,
        payload: user,
        payload_error: false
    };
};

export function signUp(signupState) {
    console.log('signupstate:', signupState);
    return (dispatcher) => {
        axios.post(`${baseUrl}users/v0/signup`, signupState).then((res) => {
            console.log('res.data:', res.data);
            dispatcher(handleSignup(res.data));
        }).catch((err) => {
            console.log('err:', err);            
            dispatcher(handleError(true));
        });
    };
};

export const handleSignup = (user) => {
    return {
        type: HANDLE_SIGNUP,
        payload: user
    };
};

export const logout = () => {
    return (dispatcher) => {
        dispatcher(handleLogout());
    }
};

export const handleLogout = () => {
    return {
        type: HANDLE_LOGOUT,
        payload: ""
    };
};

export const handleError = (error) => {
    return {
        type: HANDLE_ERROR,
        payload: error
    };
};
