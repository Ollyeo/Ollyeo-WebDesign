import React from 'react';

import './pageMain.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import ReactCursorPosition from 'react-cursor-position';
import AutoFitImage from 'react-image-autofit-frame';

import { HeaderContentFooter } from './../components/templates/templHeaderContentFooter';
import { TwoColumns } from './../components/templates/templTwoColumns';
import { WrappedLoginForm } from './../components/organisms/ogLogin';
import { WrappedRegisterForm } from './../components/organisms/ogRegister';
import { AutoImageMousePos } from './../components/molecules/mcAutoImageMousePos';
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
	  this.state = {
		  mousePosition: {x: 0, y: 0},
		  windowSize: {width: 0, height: 0},
	  };
		
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
	  this.setState({windowSize: {width: window.innerWidth, height: window.innerHeight}});
	}
	
  render() {
	  const mousePosition = this.state.mousePosition;
	  
	  const footerHeight = 45;
	  const bgImg1 = require('../asset/images/travelPlan_Normal.jpg');
	  const bgImg2 = require('../asset/images/plane_Horizontal.jpg');
	  const bodyWidth = this.state.windowSize.width;
	  const bodyHeight = this.state.windowSize.height - footerHeight;
	  const imageWidth = bodyWidth > 290 ? bodyWidth : 290 ;
	  const imageHeight = bodyHeight > 290 ? bodyHeight : 290 ;
	  const imageRatio = imageWidth / imageHeight;
	  // This is "cover" of backgroundSize!!
	  let bgSize = "auto";
	  if(imageRatio < 3.0) // windowRatio & ImageRatio
		  bgSize = "auto 100%";
	  else
		  bgSize = "100% auto";
	  
	  let bgPosition = {x:50, y:50};
	  let bgPosOffset = {x:(mousePosition.x - (this.state.windowSize.width * 0.5)) * 0.01,
						 y:(mousePosition.y - (this.state.windowSize.height * 0.5) + footerHeight) * 0.01};
	  // bgPosition = {x:bgPosition.x + bgPosOffset.x,
	  // y:bgPosition.y + bgPosOffset.y};
	  // console.log(bgPosition);
	  console.log(imageRatio + "-" + bgSize);
	  
    return (
	  <Router>
	  <div>
	  <ReactCursorPosition  {...{
		onPositionChanged: props => this.setState({mousePosition : props.position})
	  }}>
		  <HeaderContentFooter
			  contentSty={{
				width:bodyWidth,
				height:bodyHeight,
				background: '-webkit-linear-gradient(70deg, #FFFFFF 50%, #A6FBEA 80%, #1ABC9C 95%)'
  			  }}
			  contentObj={
				  <TwoColumns
					  leftObj={
						  <img
							  width="100%"
							  height={imageHeight}
							style={{
								'backgroundImage':"url(" + bgImg1 + ")",
								'backgroundRepeat':"no-repeat",
								'backgroundPosition':bgPosition.x + "%" + " " + bgPosition.y + "%",
								'backgroundSize': bgSize
							}}
						  />
					  }

					  rightObj={
						<div style={{ 'marginLeft': 'calc(50% - 145px)' }}>
						  <Route exact
							path="/"
							component={TestForm}
						  />
						  <Route
							path="/login"
							component={WrappedLoginForm}
						  />
						  <Route
							path="/register"
							component={WrappedRegisterForm}
						  />
						</div>
					  }
				  />
			  }
		  />
	  </ReactCursorPosition>
	  </div>
	  </Router>
        );
    }
}