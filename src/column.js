import React, { Component } from 'react';

class Column extends Component{
	_renderChild({ imagePath, thumbnailPath, id }) {
		const picStyle={
			  backgroundImage: "url("+thumbnailPath+")",
		}
		return (
			<div className="column" key={id}  >
			<div src={thumbnailPath} style={picStyle} onClick={() => { this.props.onImageSelect(id); }} className="columnPic"/>
			</div>
		);
	}

	_renderChildren() {
		const rendered = [];
		for (let image of this.props.files) {
			rendered.push(this._renderChild(image));
		}
		return rendered;
	}

	render(){
		return (
			<React.Fragment>
			{
				this._renderChildren()
			}
		</React.Fragment>
		);
	}
}

export default Column;
