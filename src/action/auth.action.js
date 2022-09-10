import React from 'react';
import { authConstant } from './ActionConst';
import axios from 'axios';

export const SignUp = (registrationData) => {
  //here registrationData means the form value coming from the registration form
  return async (dispatch) => {
    //action Request send to the reducer
    dispatch({ type: `${authConstant.USER_REGISTER}_REQUEST` });
    axios
      .post(`https://nodeprojectapi.herokuapp.com/register`, registrationData)
      .then((res) => {
        const msg = res.data.message;
        const uid = res.data.regdata._id;
        const userData = res.data.regdata;
        console.log(uid, res.data.regdata.email);
        console.log(res.data.regdata);

        //Success action generated
        //dispatch(actionType,paylode(opt))
        dispatch({
          type: `${authConstant.USER_REGISTER}_SUCCESS`,
          payload: {
            message: msg,
            firstname: userData.firstname,
            lastname: userData.lastname,
            userData: userData,
          },
        });
      })
      .catch((err) => {
        //Failure action generated

        dispatch({
          type: `${authConstant.USER_REGISTER}_FAILURE`,
          payload: { error: 'Registration failed!' },
        });
      });
  };
};

export const SignIn = (loginData) => {
  //here loginData means the form value coming from the login form

  return async (dispatch) => {
    //action Request send to the reducer
    dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
    axios
      .post(`https://nodeprojectapi.herokuapp.com/login`, loginData)
      .then((res) => {
        const msg = res.data.message;
        const usertoken = res.data.data.token;
        console.log(res.data.data);
        console.log(usertoken);

        //Success action generated
        //dispatch(actionType, payload(opt));
        window.localStorage.setItem('loginToken', res.data.data.token);
        dispatch({
          type: `${authConstant.USER_LOGIN}_SUCCESS`,
          payload: { message: msg, userToken: usertoken },
        });
      })
      .catch((err) => {
        //Failure action generated
        dispatch({
          type: `${authConstant.USER_LOGIN}_FAILURE`,
          payload: { error: 'Login Failure!' },
        });
      });
  };
};

export const Logout = () => {};
