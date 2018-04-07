import React from 'react';

import './pageMain.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import AutoFitImage from 'react-image-autofit-frame';

import { TwoColumns } from './../components/templates/templTwoColumns';
import { WrappedLoginForm } from './../components/organisms/ogLogin';
import { WrappedRegisterForm } from './../components/organisms/ogRegister';

import imageNormal from '../asset/images/travelPlan_Normal.jpg';
import ImageHorizontal from '../asset/images/plane_Horizontal.jpg';
const FormItem=Form.Item; // For convenience

// Image Auto Resizing
//  https://www.npmjs.com/package/react-image-autofit-frame
//  100%, bind(), componentDidMount, componentWillUnmount

// Window Size
//  https://www.npmjs.com/package/react-window-size

// Main Page : Login, Register
export class PageMain extends React.Component{
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
	  <Router>
	  <div>
		  <TwoColumns
			  leftObj={
				  <AutoFitImage 
					  imgSrc={imageNormal}
					  frameWidth={((this.state.width * 0.5) - 0) + 'px'}
					  frameHeight={((this.state.height * 1.0) - 0) + 'px'}
				  />
			  }

			  rightObj={
				  // Center position
				  <Row type="flex" justify="space-around" align="middle">
					  <Col span={12}>
						  <Route 
							exact 
						  	path="/"
						  	component={WrappedLoginForm}
						  />
						  <Route
						  	path="/register"
						  	component={WrappedRegisterForm}
						  />
					  </Col>
				  </Row>
			  }
		  />
	  </div>
	  </Router>
        );
    }
}