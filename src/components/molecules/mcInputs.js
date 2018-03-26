import React from 'react';

import { WrappedValidInput } from './../atoms/atInputs';

export class InputLoginID extends React.Component {
	// Variables
	propTypes: {
		obj_form: PropTypes.object,
	}
	
	render() {	
		return (
			<WrappedValidInput
				obj_id='InputLoginID'
				obj_form={ this.props.obj_form }
				pf_iconType='user'
				placeholder='Username'
				vr_required='true'
				vr_message='Please input your username!'
			/>
		);
	}
}

export class InputLoginPW extends React.Component {
	// Variables
	propTypes: {
		obj_form: PropTypes.object,
	}
	
	render() {	
		return (
			<WrappedValidInput
				obj_id='InputLoginPW'
				obj_form={ this.props.obj_form }
				pf_iconType='lock'
				placeholder='Password'
				vr_required='true'
				vr_message='Please input your password!'
			/>
		);
	}
}