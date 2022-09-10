import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignUp } from '../../../action/auth.action';

const validateEmail = RegExp(
  '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
);
const validatePass = RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})'
);
//const validPhoneNumber = RegExp(/^\+[1-9]\d{10,14}$/);

const Registration = () => {
  const history = useHistory();
  let registrationData = {};
  //A hook to access the Redux dispatch function
  const dispatchMethod = useDispatch();

  //A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const regData = useSelector((state) => state.authData);
  //console.log(regData);
  const [inputValue, setInputValue] = useState({
    isError: {
      fname: '',
      lname: '',
      email: '',
      password: '',
    },

    hasValue: {
      fname: false,
      lname: false,
      email: false,
      password: false,
    },

    isAllNotValid: true,
  });

  const handleInput = (event) => {
    //console.log(event);
    //event.persist();
    let { name, value } = event.target;
    //console.log(name);
    let isErrors = { ...inputValue.isError };
    let hasValues = { ...inputValue.hasValue };
    switch (name) {
      case 'fname': {
        isErrors.fname =
          value.length < 3 ? 'Atleast 3 characters required' : '';
        hasValues.fname = value.length >= 3 ? true : false;
        break;
      }

      case 'lname': {
        isErrors.lname =
          value.length < 3 ? 'Atleast 3 characters required' : '';
        hasValues.lname = value.length >= 3 ? true : false;
        break;
      }

      case 'email': {
        isErrors.email = validateEmail.test(value) ? '' : 'Not Valid email';

        hasValues.email = isErrors.email ? false : true;
        break;
      }

      case 'password': {
        isErrors.password =
          value.length < 6
            ? 'Password should have 6 characters'
            : validatePass.test(value)
            ? ''
            : 'Invalid password';
        hasValues.password = !isErrors.password ? true : false;
        break;
      }

      default:
        break;
    }
    setInputValue({
      ...inputValue,
      [name]: value,
      isError: isErrors,
      hasValue: hasValues,
    });

    if (
      hasValues.fname == true &&
      hasValues.lname == true &&
      hasValues.email == true &&
      hasValues.password == true
    ) {
      // alert('Registration Successful! Login to Continue.');
      setInputValue({
        ...inputValue,
        [name]: value,
        isError: isErrors,
        hasValue: hasValues,
        isAllNotValid: false,
      });
    }
    //console.log(isErrors);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(inputValue);
    // console.log('Fname:' + inputValue.fname, 'Lname:' + inputValue.lname, 'Email:' + inputValue.email, 'Password:' + inputValue.password);

    registrationData = {
      fname: inputValue.fname,
      lname: inputValue.lname,
      email: inputValue.email,
      password: inputValue.password,
    };
    console.log(registrationData);

    dispatchMethod(SignUp(registrationData));
  };
  useEffect(() => {});

  return (
    <>
      <Form onSubmit={submitHandler}>
        <div style={{ margin: '10px', padding: '15px' }}>
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalFname'>
            <Form.Label column sm={3}>
              First Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type='text'
                placeholder='Enter First Name'
                onChange={handleInput}
                onBlur={handleInput}
                name='fname'
              />
              {inputValue.isError.fname.length > 0 && (
                <span style={{ color: 'red' }}>{inputValue.isError.fname}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formHorizontalLname'>
            <Form.Label column sm={3}>
              Last Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type='text'
                placeholder='Enter Last Name'
                onChange={handleInput}
                onBlur={handleInput}
                name='lname'
              />
              {inputValue.isError.lname.length > 0 && (
                <span style={{ color: 'red' }}>{inputValue.isError.lname}</span>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
            <Form.Label column sm={3}>
              Email Address
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type='email'
                placeholder='Email'
                onChange={handleInput}
                onBlur={handleInput}
                name='email'
              />
              {inputValue.isError.email.length > 0 && (
                <span style={{ color: 'red' }}>{inputValue.isError.email}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formHorizontalPassword'
          >
            <Form.Label column sm={3}>
              Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={handleInput}
                onBlur={handleInput}
                name='password'
              />
              {inputValue.isError.password.length > 0 && (
                <span style={{ color: 'red' }}>
                  {inputValue.isError.password}
                </span>
              )}
            </Col>
          </Form.Group>
          {/*onClick={() => history.push(`/login/${registrationData}`)}*/}
          <Button
            variant='primary'
            type='submit'
            disabled={inputValue.isAllNotValid}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Registration;
