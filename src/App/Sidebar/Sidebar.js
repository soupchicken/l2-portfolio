import React from 'react'
import { Route } from 'react-router-dom';

const Sidebar = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		const { location, match } = this.props;
		return (
			<div id="Sidebar">
				<img
					className="portrait"
					src="/images/portrait.jpg"
				/>
				<div className="name">
					Lucas Lemos
				</div>
			</div>
		);

	}
});

export default Sidebar
