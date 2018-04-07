import React from 'react';
import './ogRegister.css';

import { connect } from 'react-redux'; // Reducx
import * as registerActions from './../../reducers/formValues';
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
    }	

	handleSubmit=(e) => {
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
			<Form className="register-form" onSubmit={this.handleSubmit} >
				<FormItem>
					<InputLoginID />
					<InputLoginPW />
					<InputLoginPW />
					<Button className="register-button"
						type="primary"
						htmlType="submit"
						>Register
					</Button>
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