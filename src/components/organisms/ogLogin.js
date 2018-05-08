import React from 'react';
import './ogLogin.css';

import { connect } from 'react-redux'; // Reducx
import { BrowserRouter as Route, Link } from "react-router-dom";

import { InputLoginID, InputLoginPW } from '../molecules/mcInputs'; // Molecules
import { WrappedRegisterForm } from './ogRegister'; // Register Form
import * as registerActions from '../../reducers/rdFormValues';
import * as authActions from '../../reducers/rdAuthentication';
import { userService } from '../../services/svUser';

// Ant Design
import { Form, Button } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {		
    constructor(props){
        super(props);
		
		this.props.onRegisterForm(this.props.form);
    }

	handleSubmit = (e) => {
		e.preventDefault();
		
		this.props.form.validateFields((err, values) => {
			console.log("Login handleSubmit: " + err, values);
			
			if (!err) {
				const { InputLoginID, InputLoginPW } = values;

				if (InputLoginID && InputLoginPW) {
					let user = {
						username: InputLoginID,
						password: InputLoginPW
					};
					
					this.props.onLoginRequest(user);
					// this.props.onLogin(user);
					
					userService.login(user)
						.then(
							user => { 
								console.log("userService.login successed: ", user);
								this.props.onLoginSuccess();
								// history.push('/');
							},
							error => {
								console.log("userService.login failed: ", error);
								this.props.onLoginFailure();
								// alertActions.error(error);
							}
						);
				}
			}
		})
	}
	
	render() {	  
		const { form, loggingIn } = this.props;
		
		console.log("loggingIn: ", loggingIn);
		
		return (
			<div className="login-form">
				<Form className="login-contents" onSubmit={this.handleSubmit} >
					<FormItem>
						<InputLoginID />
						<InputLoginPW />
						<a className="forgot-href" 
							href="/">Forgot password?
						</a>
						{loggingIn && <h> Logging-In </h>}
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
			</div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        loggingIn : state.authentication.loggingIn 
    };
}

const mapDispatchToProps = (dispatch) => ({
	onRegisterForm: (objForm) =>
		dispatch(registerActions.registerObjForm(objForm)),
	
	onLogin: (user) =>
		dispatch(authActions.login(user)),
	
	onLoginRequest: (user) =>
		dispatch(authActions.loginRequest(user)),
	
	onLoginSuccess: (user) =>
		dispatch(authActions.loginSuccess(user)),
	
	onLoginFailure: () =>
		dispatch(authActions.loginFailure())
	
})
	
// Just get the value from the Store
LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// getFieldDecorator
export const WrappedLoginForm = Form.create()(LoginForm);