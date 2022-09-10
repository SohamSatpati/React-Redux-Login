import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SignUp } from '../../../action/auth.action';

export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    //console.log(this.props.history);
    //const registrationObj = JSON.parse(props.match.params.reg);

    //console.log(registrationObj);
  }

  state = {
    inputValues: {},
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      ...(this.state.inputValues[name] = value),
      ...(this.state.inputValues[name] = value),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log('email:' + this.state.email);
    //	console.log('pass:' + this.state.password);
    //console.log(this.state.inputValues);
    let loginData = this.state.inputValues;
    // console.log('email:' + this.state.inputValues.email);
    // console.log('password:' + this.state.inputValues.password);
    console.log(loginData);
    // axios
    //   .post('https://nodeprojectapi.herokuapp.com/login', loginData)
    //   .then((response) => {
    //     console.log(response);
    //     let loginData = response.data;
    //     window.sessionStorage.setItem('LoginToken', loginData.data.token);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <div style={{ margin: '10px', padding: '15px' }}>
            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formHorizontalEmail'
            >
              <Form.Label column sm={3}>
                Email Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={this.handleChange}
                />
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
                  name='password'
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  }
}
