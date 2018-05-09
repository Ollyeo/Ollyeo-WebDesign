import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

// Main Login Page
export class HeaderContentFooter extends React.Component{
	// Variables
	propTypes: {
		contentSty: PropTypes.object,
		
		headerObj: PropTypes.object,
		contentObj: PropTypes.object,
		footerObj: PropTypes.object
	};
	
  render() {
    return (
		<Layout>
			{ this.props.headerObj }

			<Content style={ this.props.contentSty }>
				{ this.props.contentObj }
			</Content>
		
			<Footer style={{ textAlign: 'center' }}>
				{ this.props.footerObj }
				Ollyeo ©2018 Created by Team Ollyeo
			</Footer>
		  </Layout>
        )
    }
}