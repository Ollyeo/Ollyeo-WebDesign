import React from 'react';

import { Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

// Ant Design Icons
//  https://ant.design/components/icon/

// Dynamic Rules : Perform different check rules according to different situations.
//  https://ant.design/components/form/
class SubmitInput extends React.Component {

	// Values
	propTypes: {
		obj_id: React.PropTypes.string.isRequired,
		submit_consoleLog: '{id} SubmitInput, submit_consoleLog',

		pf_iconType: 'question',
		placeholder: '',

		// Validation Rules
		vr_required: false,
		vr_message: 'Validation error message.'
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
		const { getFieldDecorator } = this.props.form;
		
		return (
			<Form onSubmit={this.handleSubmit} >
				<FormItem>
					{getFieldDecorator
						(
							this.props.obj_id,
							{
								rules: [{
									required: this.props.vr_required,
									message: this.props.vr_message
								}],
							}
						)
						(
							<Input
								prefix={
									<Icon 
										type={this.props.pf_iconType}
										style={{ color: 'rgba(0,0,0,.25)' }}
									/>
								}
								placeholder={this.props.placeholder}
							/>
						)
					}
				</FormItem>
			</Form>
		);
	}
}

// getFieldDecorator
export const WrappedSubmitInput = Form.create()(SubmitInput);