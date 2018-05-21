import React from 'react';
import { Row, Col } from 'antd'; // For Ant Design components

// Main Login Page
export class TwoColumns extends React.Component{
	// Variables
	propTypes: {		
		leftObj: PropTypes.object,
		rightObj: PropTypes.object
	};
	
  render() {
    return (
		<Row type="flex" justify="space-around" align="middle">
		  <Col span={12}>
		    { this.props.leftObj }
		  </Col>

		  <Col span={12}>
			{ this.props.rightObj }
		  </Col>
		</Row>
        )
    }
}