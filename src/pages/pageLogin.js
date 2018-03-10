import React from 'react';
import './pageLogin.css';

// For Ant Design components
import { Row, Col, Form } from 'antd';
const FormItem = Form.Item;

// Images
import pageLoginImgLeft from '../images/travelWithThings.jpeg';

// Left side
class PageLeftSide extends React.Component{
  render() {
    return (
	  <div className = "leftSide">
	    <img
		  className = "ls_image"
		  src = {pageLoginImgLeft}
		/>
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
		)
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
        )
    }
}