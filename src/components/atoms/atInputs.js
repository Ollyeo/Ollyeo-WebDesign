import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // Reducx

// Ant Design
import { Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

// Dynamic Rules : Perform different check rules according to different situations.
//  https://ant.design/components/form/
class ValidInput extends React.Component {
	constructor(props) {
		super(props);
	}
	
	onChangeEvent = (e) => {
		// "onChange" may not exist on the parent
		if(this.props.onChange)
			this.props.onChange(e);
	}
	
	
	render() {
		const { getFieldDecorator } = this.props.obj_form;
		
		return (
			<FormItem>
				{getFieldDecorator
					(
						this.props.obj_id,
						{
							rules: [this.props.rules],
						}
					)
					(
						<Input
							prefix={
								<Icon 
									type={this.props.pf_iconType}
									style={{color: 'rgba(0,0,0,.25)'}}
								/>
							}
							type={this.props.type}
							size={this.props.size}
							placeholder={this.props.placeholder}
        					onChange={this.onChangeEvent}
						/>
					)
				}
			</FormItem>
		);
	}
}

// Variables
ValidInput.propTypes = {
	obj_id: PropTypes.string.isRequired,
	// Takes from the Store, Redux
	obj_form: PropTypes.object.isRequired,

	type: PropTypes.string,
	size: PropTypes.string, // default
	placeholder: PropTypes.string,

	pf_iconType: PropTypes.string, // prefix
	rules: PropTypes.object
};

let mapStateToProps = (state) => {
    return {
        obj_form: state.formValues.objForm
    };
}

ValidInput = connect(mapStateToProps)(ValidInput);

// getFieldDecorator
export const WrappedValidInput = Form.create()(ValidInput);