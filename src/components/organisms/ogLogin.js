import React from 'react';
import './ogLogin.css';

import { connect } from 'react-redux'; // Reducx
import formValues from './../../reducers/formValues'; // action
import { InputLoginID, InputLoginPW } from './../molecules/mcInputs'; // Molecules

// Ant Design
import { Form, Button } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {	
	
	// Variables
	propTypes: {
		submit_consoleLog: 'LoginForm SubmitInput, submit_consoleLog'
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
			<Form className="login-form" onSubmit={this.handleSubmit} >
				<FormItem>
					<InputLoginID obj_form={ form } />
					<InputLoginPW obj_form={ form } />
					<a className="forgot-href" 
						href="">Forgot password?
					</a>
					<Button className="login-button"
						type="primary"
						htmlType="submit"
						>Log in
					</Button>
					<Form className="create-recommend-text" layout="inline" >
						<FormItem>
							<h>Not registered?&nbsp;</h>
							<a className="create-href"
								href="">Create an account!
							</a>
						</FormItem>
					</Form>
				</FormItem>
			</Form>
        )
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         props: form => dispatch(formValues(form))
//     }
// }

// LoginForm = connect(undefined, mapDispatchToProps)(LoginForm);

// getFieldDecorator
export const WrappedLoginForm = Form.create()(LoginForm);