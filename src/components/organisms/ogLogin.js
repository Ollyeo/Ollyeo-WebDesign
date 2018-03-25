import React from 'react';
import { Form, Button } from 'antd';
import { InputLoginID, InputLoginPW } from './../molecules/mcInputs';

const FormItem = Form.Item;

export class LoginForm extends React.Component {	
	
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
			<Form onSubmit={this.handleSubmit} >
				<FormItem>
					<InputLoginID obj_form={ form } />
					<InputLoginPW obj_form={ form } />
					<Button
						type="primary"
						htmlType="submit"
						>Log in
					</Button>
				</FormItem>
			</Form>
        )
    }
}

// getFieldDecorator
export const WrappedLoginForm = Form.create()(LoginForm);