import React from 'react';

import { WrappedValidInput } from './../atoms/atInputs';

export class InputLoginID extends React.Component {
	render() {	
		return (
			<WrappedValidInput
				obj_id='InputLoginID'
				pf_iconType='user'
				placeholder='Username'
				vr_required='true'
				vr_message='Please input your username!'
			/>
		);
	}
}

export class InputLoginPW extends React.Component {
	render() {	
		return (
			<WrappedValidInput
				obj_id='InputLoginPW'
				pf_iconType='lock'
				placeholder='Password'
				vr_required='true'
				vr_message='Please input your password!'
			/>
		);
	}
}