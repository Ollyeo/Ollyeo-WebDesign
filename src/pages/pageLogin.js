import React from 'react';

import './pageLogin.css';
import { WrappedLoginForm } from './../components/organisms/ogLogin';

// For Ant Design components
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

// Images
import imageNormal from '../asset/images/travelPlan_Normal.jpg';
import ImageHorizontal from '../asset/images/plane_Horizontal.jpg';

import AutoFitImage from 'react-image-autofit-frame'; // Imgae Auto-Fit
const FormItem=Form.Item; // For convenience

// Image Auto Resizing
//  https://www.npmjs.com/package/react-image-autofit-frame
//  100%, bind(), componentDidMount, componentWillUnmount

// Window Size
//  https://www.npmjs.com/package/react-window-size

// Main Login Page
export class PageLogin extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
  render() {
    return (
	  <div>
		<Row type="flex" justify="space-around" align="middle">
		  <Col span={12}>
		    <AutoFitImage 
				imgSrc={imageNormal}
				frameWidth={((this.state.width * 0.5) - 0) + 'px'}
				frameHeight={((this.state.height * 1.0) - 0) + 'px'}
			/>
		  </Col>

		  <Col span={12}>
			<Row type="flex" justify="space-around" align="middle">
				<Col span={12}>
					<WrappedLoginForm />
				</Col>
			</Row>
		  </Col>
		</Row>
	  </div>
        )
    }
}