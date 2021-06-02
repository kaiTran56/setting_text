import React,{Component} from 'react';

class Result extends Component{

	onSetStyleColor(){
		return {
			color : this.props.color,
			borderColor : this.props.color
		};
	}

	render(){
		return(
			<div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p>Color: red - Fontsize: 15px</p>
	              <div id="content" style={this.onSetStyleColor()}>
	                Content
	              </div>
				</div>
			</div>
		);
	}
}

export default Result;