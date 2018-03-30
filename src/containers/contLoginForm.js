import React from 'react';
import { connect } from 'react-redux';
import { WrappedLoginForm } from './../components/organisms/ogLogin';
import * as registerAction from '../reducers/formValues';

class LoginFormContainer extends React.Component{
	handleRegisterFrom = () => {
		this.props.registerLoginForm();
	}
	
	render() {
		const { handleRegisterFrom } = this;
		
		return (
			<div>
				<WrappedLoginForm />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	registerLoginForm: () => dispatch(registerActions.registerLoginForm())
})
 
export default connect()(WrappedLoginForm)