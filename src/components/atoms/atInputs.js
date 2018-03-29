import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

// Dynamic Rules : Perform different check rules according to different situations.
//  https://ant.design/components/form/

class ValidInput extends React.Component {
	render() {
		const { getFieldDecorator } = this.props.obj_form;
		return (
			<Form>
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
								size={this.props.size}
								placeholder={this.props.placeholder}
								style={ this.props.style }
							/>
						)
					}
				</FormItem>
			</Form>
		);
	}
}

// Variables
ValidInput.propTypes = {
	obj_id: PropTypes.string.isRequired,
	obj_form: PropTypes.object.isRequired,

	size: 'default',
	placeholder: '',
	style: '',

	pf_iconType: 'question',

	// Validation Rules
	vr_required: false,
	vr_message: 'Validation error message.'
}

// getFieldDecorator
export const WrappedValidInput = Form.create()(ValidInput);