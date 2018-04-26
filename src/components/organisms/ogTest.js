import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem=Form.Item; // For convenience

export class TestForm extends React.Component {	
    constructor(props){
        super(props);
    }
	
	render() {			
		return (
			<Form className="test-form" onSubmit={this.handleSubmit} >
				<Route render={props => (
					localStorage.getItem('user')
						? <Component {...props} />
						: <Redirect to={{ pathname: '/login' }} />
				)} />

				<FormItem>
					<h> Test Form </h>
				</FormItem>
			
				<FormItem>
					<Button className="test-button"
						type="primary"
						htmlType="submit"
						>Button
					</Button>
				</FormItem>
			</Form>
        );
    }
}