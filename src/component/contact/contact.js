import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
//formik is a library for form handling
const validateEmail = RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');
const validatePass = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})');
//const validPhoneNumber = RegExp(/^\+[1-9]\d{10,14}$/);

const validateContactForm = contactData => {
	const errors = {};
	//first name validation
	if (!contactData.fname) {
		errors.fname = 'Please Enter First name';
	} else if (contactData.fname.length > 20) {
		errors.fname = 'First name could not exceed 20 characters';
	}
	//last name validation
	if (!contactData.lname) {
		errors.lname = 'Please Enter Last name';
	} else if (contactData.lname.length > 20) {
		errors.lname = 'Last name could not exceed 20 characters';
	}
	//email validation
	if (!contactData.email) {
		errors.email = 'Please Enter email';
	} else if (!validateEmail.test(contactData.email)) {
		errors.email = 'Invalid email address';
	}
	//password validation
	if (!contactData.password) {
		errors.password = 'Please Enter password';
	} else if (contactData.password.length < 6) {
		errors.password = 'Password need minimum 6 characters';
	} else if (!validatePass.test(contactData.password)) {
		errors.password = 'Password should have uppercase,lowercase,number and special charater';
	}

	// //retype password validation
	// if (!contactData.repassword) {
	// 	errors.repassword = 'Retype password should not be blank!';
	// } else if (contactData.password != contactData.repassword) {
	// 	errors.repassword = 'Password does not matched!';
	// }

	// //phone number validation
	// if (!contactData.phone) {
	// 	errors.phone = 'Please Enter phone number';
	// } else if (!validPhoneNumber.test(contactData.phone)) {
	// 	errors.phone = 'invalid phone';
	// }

	return errors;
};

export default function Contact() {
	const contactFormik = useFormik({
		initialValues: {
			fname: '',
			lname: '',
			email: '',
			password: '',
			// repassword: '',
			// phone: '',
		},
		validate: validateContactForm,
		onSubmit: values => {
			//console.log(values);
			let contactData = values;
			console.log(contactData);
			//axios return promise
			axios
				.post('https://nodeprojectapi.herokuapp.com/register', contactData)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		},
	});

	return (
		<>
			<Form onSubmit={contactFormik.handleSubmit}>
				<div style={{ margin: '10px', padding: '15px' }}>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalFname">
						<Form.Label column sm={3}>
							First Name
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="text"
								placeholder="Enter First Name"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.fname}
								name="fname"
							/>

							{contactFormik.touched.fname && contactFormik.errors.fname ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.fname}</span>
							) : null}
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" controlId="formHorizontalLname">
						<Form.Label column sm={3}>
							Last Name
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="text"
								placeholder="Enter Last Name"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.lname}
								name="lname"
							/>
							{contactFormik.touched.lname && contactFormik.errors.lname ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.lname}</span>
							) : null}
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
						<Form.Label column sm={3}>
							Email Address
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="email"
								placeholder="Email"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.email}
								name="email"
							/>
							{contactFormik.touched.email && contactFormik.errors.email ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.email}</span>
							) : null}
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
						<Form.Label column sm={3}>
							Password
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.password}
								name="password"
							/>
							{contactFormik.touched.password && contactFormik.errors.password ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.password}</span>
							) : null}
						</Col>
					</Form.Group>

					{/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalRePassword">
						<Form.Label column sm={3}>
							Retype Password
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="password"
								placeholder="Reenter Password"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.repassword}
								name="repassword"
							/>
							{contactFormik.touched.repassword && contactFormik.errors.repassword ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.repassword}</span>
							) : null}
						</Col>
					</Form.Group> */}

					{/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
						<Form.Label column sm={3}>
							Mobile Number
						</Form.Label>
						<Col sm={9}>
							<Form.Control
								type="text"
								placeholder="+9199XXXXXXXX"
								onChange={contactFormik.handleChange}
								onBlur={contactFormik.handleBlur}
								value={contactFormik.values.phone}
								name="phone"
								maxLength="14"
							/>
							{contactFormik.touched.phone && contactFormik.errors.phone ? (
								<span style={{ color: 'red' }}>{contactFormik.errors.phone}</span>
							) : null}
						</Col>
					</Form.Group> */}

					<Button variant="primary" type="submit" disabled={!(contactFormik.isValid && contactFormik.dirty)}>
						Submit
					</Button>
				</div>
				{/* <p>
					<label htmlFor="fname">First Name:</label>
					<input
						type="text"
						name="fname"
						placeholder="Enter First Name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.fname}
					/>

					{formik.touched.fname && formik.errors.fname ? <span style={{ color: 'red' }}>{formik.errors.fname}</span> : null}
				</p>
				<p>
					<label htmlFor="lname">Last Name:</label>
					<input type="text" name="lname" placeholder="Enter Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
					{formik.touched.lname && formik.errors.lname ? <span style={{ color: 'red' }}>{formik.errors.lname}</span> : null}
				</p>
				<p>
					<label htmlFor="email">Email:</label>
					<input type="text" name="email" placeholder="example@test.com" onChange={formik.handleChange} onBlur={formik.handleBlur} />

					{formik.touched.email && formik.errors.email ? <span style={{ color: 'red' }}>{formik.errors.email}</span> : null}
				</p>

				<p>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />

					{formik.touched.password && formik.errors.password ? <span style={{ color: 'red' }}>{formik.errors.password}</span> : null}
				</p>
				<p>
					<label htmlFor="repassword">Retype Password:</label>
					<input
						type="password"
						name="repassword"
						placeholder="Reenter Password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					{formik.touched.repassword && formik.errors.repassword ? <span style={{ color: 'red' }}>{formik.errors.repassword}</span> : null}
				</p>
				<p>
					<label htmlFor="phone">Phone:</label>
					<input
						type="text"
						name="phone"
						placeholder="+9199XXXXXXXX"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						maxLength="14"
					/>
					{formik.touched.phone && formik.errors.phone ? <span style={{ color: 'red' }}>{formik.errors.phone}</span> : null}
				</p> */}

				{/* <Button variant="primary" type="submit" disabled={!(formik.isValid && formik.dirty)}>
					Submit
				</Button> */}
			</Form>
		</>
	);
}
