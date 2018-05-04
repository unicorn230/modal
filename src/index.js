import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Column from './column';
import Modal from "./modal";

import img_fjords from "./img_fjords.jpg";
import img_lights from "./img_lights.jpg";
import img_mountains from "./img_mountains.jpg";
import img_nature from "./img_nature.jpg";

import img_fjords_wide from "./img_fjords_wide.jpg"
import img_lights_wide from "./img_lights_wide.jpg";
import img_mountains_wide from "./img_mountains_wide.jpg";
import img_nature_wide from "./img_nature_wide.jpg";

import img_fjords2 from "./img_fjords2.jpg";
import img_lights2 from "./img_lights2.jpg";
import img_mountains2 from "./img_mountains2.jpg";
import img_nature2 from "./img_nature2.jpg";

import img_fjords_wide2 from "./img_fjords_wide2.jpg";
import img_lights_wide2 from "./img_lights_wide2.jpg";
import img_mountains_wide2 from "./img_mountains_wide2.jpg";
import img_nature_wide2 from "./img_nature_wide2.jpg";

const FILES = [

	{
		imagePath: img_fjords_wide,
		thumbnailPath: img_fjords,
		id: 'source1',
		text: '1'
	},
	{
		imagePath: img_lights_wide,
		thumbnailPath: img_lights,
		id: 'source2',
		text: '2'
	},
	{
		imagePath: img_mountains_wide,
		thumbnailPath: img_mountains,
		id: 'source3',
		text: '3'
	},
	{
		imagePath: img_nature_wide,
		thumbnailPath: img_nature,
		id: 'source4',
		text: '4'
	},
	{
		imagePath: img_fjords_wide2,
		thumbnailPath: img_fjords2,
		id: 'source5',
		text: '5'
	},
	{
		imagePath: img_lights_wide2,
		thumbnailPath: img_lights2,
		id: 'source6',
		text: '6'
	},
	{
		imagePath: img_mountains_wide2,
		thumbnailPath: img_mountains2,
		id: 'source7',
		text: '7'
	},
	{
		imagePath: img_nature_wide2,
		thumbnailPath: img_nature2,
		id: 'source8',
		text: '8'
	},
];

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			viewModal: false,
		};
	}

	selectImage(id) {
		this.setState({
			viewModal: true,
			id: id,
		});
	}

	showModal() {
		this.setState({
			viewModal: true,

		});
	}

	hideModal() {
		this.setState({
			viewModal: false,
		});

	}

	render() {
		return (
			<React.Fragment>
				{ this.state.viewModal
					? <Modal files={FILES} selected={this.state.id} onImageSelect={(id) => this.selectImage(id)} onClose={() => this.hideModal()}  />
					: <Column files={FILES} onImageSelect={(id) => this.selectImage(id)} selected={this.state.id} />
				}
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
