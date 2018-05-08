import React from 'react';

import './pageMain.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import AutoFitImage from 'react-image-autofit-frame';

import { HeaderContentFooter } from './../components/templates/templHeaderContentFooter';
import { TwoColumns } from './../components/templates/templTwoColumns';
import { WrappedLoginForm } from './../components/organisms/ogLogin';
import { WrappedRegisterForm } from './../components/organisms/ogRegister';
import { TestForm } from './../components/organisms/ogTest';

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
		  <HeaderContentFooter
			  contentSty={{
				background: '-webkit-linear-gradient(75deg, #f0f2f5 30%, #A6FBEA 80%, #1ABC9C 95%)',
  			  }}
			  contentObj={
				  <TwoColumns
					  leftObj={
						  <AutoFitImage 
							  imgSrc={imageNormal}
							  frameWidth={((this.state.width * 0.5) - 0) + 'px'}
							  frameHeight={((this.state.height * 1.0) - 0) + 'px'}
						  />
					  }

					  rightObj={
						  <Row type="flex" justify="space-around" align="middle">
							  <Col span={12}>
								  <Route exact
									path="/"
									component={TestForm}
								  />
								  <Route 
									path="/login"
									component={WrappedLoginForm}
									style={{ position:'absolute' }}
								  />
								  <Route
									path="/register"
									component={WrappedRegisterForm}
								  />
							  </Col>
						  </Row>
					  }
				  />
			  }
		  />
	  </div>
	  </Router>
        );
    }
}