import React from 'react';

import { WrappedValidInput } from './../atoms/atInputs';

export class InputLoginID extends React.Component {
    constructor(props) {
        super(props);
    }
	
	render() {		
		return (
			<WrappedValidInput
				obj_id='InputLoginID'
				pf_iconType='user'
				placeholder='Username'
				rules={{required:true, message:"Please input your username!"}}
			/>
		);
	}
}

export class InputLoginPW extends React.Component {
    constructor(props) {
        super(props);
    }
	
	onChangeEvent = (e) => {
		if(this.props.onChange)
			this.props.onChange(e);
	}
	
	render() {
		return (
			<WrappedValidInput
				obj_id={'InputLoginPW' + this.props.obj_id}
				pf_iconType='lock'
				placeholder={this.props.placeholder}
				rules={this.props.rules}
				onChange={this.onChangeEvent.bind(this)}
			/>
		);
	}
}

// Variables
InputLoginPW.defaultProps  = {
	obj_id: '',
	placeholder: 'Password',
	rules: {required:true, message:'Please input your password!'}
};