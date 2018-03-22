import React from 'react';
// import Image from 'react-image-resizer';

import './pageLogin.css';
import { InputLoginID, InputLoginPW } from './../components/molecules/mcInputs';

// For Ant Design components
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

// Images
import pageLoginImgLeft from '../asset/images/travelWithThings.jpeg';

// For convenience
const FormItem=Form.Item;

// // Manually import AutoFitImage from 'react-image-autofit-frame';
// var AutoFitImage=require("../../node_modules/react-image-autofit-frame");

// Main Login Page
export class PageLogin extends React.Component{
  render() {
    return (
	  <div className="container">
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

// Left side
class PageLeftSide extends React.Component{
  render() {
    return (
	  <div className="leftSide">
		  <img className="image_Main"
		    src={pageLoginImgLeft}
            width={200}
		    height={200}
		  />
	  </div>
		)
	}
}

// Right side
class PageRightSide extends React.Component {
  render() {
	  return (
		  <div className="rightSide">
		  	<LoginForm />
		  </div>
	  );
  }
}

class LoginForm extends React.Component {
	
	render() {
		return (
			<div >
				<InputLoginID />
				<InputLoginPW />
			</div>
		);
	}
}