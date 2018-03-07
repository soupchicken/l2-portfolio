import React from 'react'
import PropTypes from 'prop-types';

const Tool = React.createClass({

	getInitialState(){
		return {
			percentFilled:0
		}
	},

	componentDidMount(){
		const { percentFilled, position } = this.props;
		setTimeout(() => this.setState({ percentFilled }), position * 135 )
	},

	render(){
		const { name } = this.props;
		const { percentFilled } = this.state;
		return (
			<div className="tool">
				<div className="name">{ name }</div>
				<div
					className="expertise"
				/>
			</div>
		);
	}

});

export default Tool
