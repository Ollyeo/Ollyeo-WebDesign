import React from 'react';
// https://www.npmjs.com/package/react-image-autofit-frame
import AutoFitImage from 'react-image-autofit-frame';

export class AutoImageMousePos extends React.Component{
    constructor(props) {
        super(props);
    }
	
	render() {	
		return (
			  <AutoFitImage
				  imgSrc={this.props.imgSrc}
				  frameWidth={this.props.frameWidth}
				  frameHeight={this.props.frameHeight}
				  positionX={this.props.positionX}
				  positionY={this.props.positionY}
				  keepOriginalImgSize={this.props.keepOriginalImgSize}
				  imgSize={this.props.imgSize}
			  />
        );
    }
}

// Variables
AutoImageMousePos.defaultProps  = {
  imgSrc: "image.path.extension",
  frameWidth: "100px",
  frameHeight: "100px",
  positionX: "center",
  positionY: "center",
  keepOriginalImgSize: "false",
  imgSize: "cover",
	
  mousePositionX: 0,
  mousePositionY: 0
};