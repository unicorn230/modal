import React, {Component} from 'react';

class Modal extends Component {

	plusBars(nextBar){
		const currentId = this.props.selected;
		const found = this.props.files.findIndex((file) => file.id === currentId);
		let nextIndex = (found + nextBar) % this.props.files.length;
		if (nextIndex < 0) {
			nextIndex = this.props.files.length + nextIndex;
		}
		this.props.onImageSelect(this.props.files[nextIndex].id);
	}

	plusSlides(next) {
		const currentId = this.props.selected;
		const found = this.props.files.findIndex((file) => file.id === currentId);
		let nextIndex = (found + next) % this.props.files.length;
		if (nextIndex < 0) {
			nextIndex = this.props.files.length + nextIndex;
		}

		this.props.onImageSelect(this.props.files[nextIndex].id);
		return;
	}

	_renderChild({imagePath, thumbnailPath, id, text}) {
		var picStyle={
			backgroundImage: "url("+imagePath+")",
		};
		return (<React.Fragment key={id}>
			<div className="instrument">
				<div className="numbertext" >{text+ "/" + this.props.files.length}</div>
				<div className="emptySpaceInstrument" />
				<div className="close" onClick={() => this.props.onClose()}>&times;</div>
			</div>

			<div className="ModalSlide">
				<div className="prevBlock">
					<div className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</div>
				</div>

				<div className="emptySpacePicture">
					<div className="picture" key={id} style={picStyle}/>
				</div>

				<div className="nextBlock">
					<div className="next" onClick={() => this.plusSlides(1)}>&#10095;</div>
				</div>
			</div>
		</React.Fragment>);
	}

	_renderChildren() {
		var i=0 ;
		const rendered = [];
		for (let image of this.props.files) {
			i++;
			if (this.props.selected === 'source' + [i]) {
				rendered.push(this._renderChild(image));

			}
		}

		return rendered;
	}

	_renderChildBar({imagePath, thumbnailPath, id,}) {
		const picStyle={
			backgroundImage: "url("+thumbnailPath+")",
			opacity: this.props.selected === id? '1': '0.6',
		}
		return ( <div className="bar" key={id}>
			<div className="demo" onClick={() => {this.props.onImageSelect(id);}} style={picStyle} alt={this.props} />
		</div>);
	}

	_renderChildrenBar() {
		const rendered=[];
		var i;
		const currentId = this.props.selected;
		const found = this.props.files.findIndex((file) => file.id === currentId);
		var render = [found-1, found, found+1];
		for(i=0;i < render.length;){
			if(found === 0){
				render[0]= this.props.files.length - 1;
			}else if(found === this.props.files.length-1){
				render[2]= this.props.files.length-found;
			}
			rendered.push(this._renderChildBar(this.props.files[render[i]]));
			i++;
		}
		return rendered;
	}

	render() {
		return (<React.Fragment>
			{this._renderChildren()}
			<div className="ModalBar">
				<div className="prevBarBlock">
					<div className="prevBar" onClick={() => this.plusBars(-3)}>&#10094;</div>
				</div>
				<div className="barsPicture">
					{this._renderChildrenBar()}
				</div>
				<div className="nextBarBlock">
					<div className="nextBar" onClick={() => this.plusBars(3)}>&#10095;</div>
				</div>
			</div>
		</React.Fragment>);
	}

}

export default Modal;
