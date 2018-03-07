import React from 'react'
import PropTypes from 'prop-types';

const Skill = React.createClass({

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
			<div className="skill">
				<div className="name">{ name }</div>
				<div className="xp-bar">
					<div
						className="earned-xp"
						style={{ width:`${percentFilled}%` }}
					/>
				</div>
			</div>
		);
	}

});

export default Skill
