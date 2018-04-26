import React from 'react';
import './ogLogin.css';

import { connect } from 'react-redux'; // Reducx
import * as registerActions from './../../reducers/rdFormValues';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { InputLoginID, InputLoginPW } from './../molecules/mcInputs'; // Molecules
import { WrappedRegisterForm } from './ogRegister'; // Register Form

// Ant Design
import { Form, Button } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {	
	// Variables
	propTypes: {
		submit_consoleLog: 'LoginForm SubmitInput, submit_consoleLog'
	}
	
    constructor(props){
        super(props);
		
		this.props.onRegisterForm(this.props.form);
    }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(this.props.consoleLog, values);
			}
		});
	}
	
	render() {	  
		const { form } = this.props;

		return (
			<Form className="login-form" onSubmit={this.handleSubmit} >
				<FormItem>
					<InputLoginID />
					<InputLoginPW />
					<a className="forgot-href" 
						href="/">Forgot password?
					</a>
					<Button className="login-button"
						type="primary"
						htmlType="submit"
						>Login
					</Button>
					<FormItem className="create-account-text">
						<h>Not registered?&nbsp;</h>
						<Link to="/register">Create an account!</Link>
					</FormItem>
				</FormItem>
			</Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
	onRegisterForm: (objForm) =>
	dispatch(registerActions.registerObjForm(objForm))
})
	
// Just get the value from the Store
LoginForm = connect(undefined, mapDispatchToProps)(LoginForm);

// getFieldDecorator
export const WrappedLoginForm = Form.create()(LoginForm);