import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from '../../../action/auth.action';
import formik, { useFormik } from 'formik';

const validateEmail = RegExp(
  '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
);
const validatePass = RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})'
);

const LoginFunc = () => {
  const dispatchMethod = useDispatch();
  const loginInfo = useSelector((stateValue) => stateValue.authData);
  // console.log(loginInfo);
  const validateLoginForm = (loginData) => {
    const isErrors = {};

    if (!loginData.email) {
      isErrors.email = 'Enter Email Address';
    } else if (!validateEmail.test(loginData.email)) {
      isErrors.email = 'Invalid Email!';
    }

    if (!loginData.password) {
      isErrors.password = 'Enter Password';
    } else if (!validatePass.test(loginData.password)) {
      isErrors.password = 'Invalid Password!';
    }
    return isErrors;
  };
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLoginForm,
    onSubmit: (values) => {
      //const { email, password } = fetchRegistrationData;
      // console.log(email, password);
      console.log(values);
      const loginData = values;
      dispatchMethod(SignIn(loginData));
    },
  });
  return (
    <>
      <div style={{ padding: '25px' }}>
        <Form onSubmit={loginFormik.handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
            />
            {loginFormik.errors.email && loginFormik.touched.email ? (
              <span style={{ color: 'red', fontWeight: 'Bold' }}>
                {loginFormik.errors.email}
              </span>
            ) : null}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
            />
            {loginFormik.errors.password && loginFormik.touched.password ? (
              <span style={{ color: 'red', fontWeight: 'Bold' }}>
                {loginFormik.errors.password}
              </span>
            ) : null}
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            disabled={!(loginFormik.dirty && loginFormik.isValid)}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};
export default LoginFunc;
