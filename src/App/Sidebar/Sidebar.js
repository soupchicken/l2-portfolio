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
				<div className="header">
					<img
						className="portrait"
						src="/images/portrait.jpg"
					/>
					<div className="name">
						Lucas Lemos
					</div>
					<div className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
					</div>
				</div>
				<div className="university">
					<img className="logo" src="/images/wharton.svg"/>
					<div className="name">Wharton '11</div>
					<div className="focus">Finance  .  Math</div>
				</div>
				<div className="contact">
					<a href="#" className="icon-twitter">_soupkal</a>
					<a href="#" className="icon-github">soupchicken</a>
					<a href="#" className="icon-facebook">/llemos</a>

				</div>
			</div>
		);

	}
});

export default Sidebar