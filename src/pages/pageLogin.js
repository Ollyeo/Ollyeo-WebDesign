import React from 'react';
import './pageLogin.scss';

// For Ant Design components
import { Row, Col, Form, DatePicker } from 'antd';

// // Images
// import pageLoginImgLeft from '../images/travelWithThings.jpeg';

// For convenience
const FormItem = Form.Item;

// Left side
class PageLeftSide extends React.Component{
  render() {
    return (
	  <div className = "leftSide">
		  <h1>LoginPage LeftSide</h1>
		  <DatePicker />
	  </div>
		)
	}
}

// Right side
class PageRightSide extends React.Component{
  render() {
	return (
	  <div className = "rightSide">
	    <Form layout="inline">
		  <FormItem>
		    <h1>LoginPage RightSide</h1>
		  </FormItem>
		</Form>
      </div>
		);
	}
}

// Main Login Page
export class PageLogin extends React.Component{
  render() {
    return (
	  <div className = "container">
		<Row>
		
		  <Col span={12}>
		    <PageLeftSide />
		  </Col>
		
		  <Col span={12}>
		    <PageRightSide />
		  </Col>
		
		</Row>
	  </div>
        );
    }
}