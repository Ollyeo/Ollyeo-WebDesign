import React from 'react';
import './ogRegister.css';

import { connect } from 'react-redux'; // Reducx
import { BrowserRouter as Route, Link } from "react-router-dom";
import * as registerActions from './../../reducers/rdFormValues';
import { InputLoginID, InputLoginPW } from './../molecules/mcInputs'; // Molecules

// Ant Design
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class RegisterForm extends React.Component {
	// Variables
	propTypes: {
		submit_consoleLog: 'RegisterForm SubmitInput, submit_consoleLog'
	}
	
    constructor(props){
        super(props);
		this.props.onRegisterForm(this.props.form);
		
		this.state = {
			password: ''
		};
    }	

	onChangePW = (e) => {
		this.setState({ password: e.target.value });
	}
	
	onChangePW_Confirm = (e) => {
		this.setState({ password_confirm: e.target.value });
	}
	

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.info('REGISTER!!', values);
			}
			else
				console.info('FAILED!!', values);
			},
		);
	}
	
	render() {	  
		const { form } = this.props;
		const { password } = this.state;
		
		return (
			<Form className="register-form" onSubmit={this.handleSubmit} >
				<FormItem>
					<InputLoginID />
					<InputLoginPW
						onChange={this.onChangePW.bind(this)}
					/>
					<InputLoginPW
						obj_id='_Confirm'
						placeholder='Confirm Password'
						rules={{
							   required:true,
							   message:"Does not match with the password!",
							   type: "enum",
							   enum: [password]
						}}
						onChange={this.onChangePW_Confirm.bind(this)}
					/>
					<Button className="register-button"
						type="primary"
						htmlType="submit"
						>Register
					</Button>
					<FormItem className="go-login-text">
						<h>Already have a account?&nbsp;</h>
						<Link to="/">Go to Login</Link>
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
RegisterForm = connect(undefined, mapDispatchToProps)(RegisterForm);

// getFieldDecorator
export const WrappedRegisterForm = Form.create()(RegisterForm);