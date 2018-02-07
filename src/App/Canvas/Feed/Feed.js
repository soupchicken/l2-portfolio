import React from 'react'
import { Route } from 'react-router-dom';

const Feed = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		return (
			<div id="Feed">
				<div className="header">
					<img
						className="logo"
						src="/images/logo.svg"
					/>
					<div className="tags-window">
						<div className="tags-wrap">
							<div className="tag">Graphic Design</div>
							<div className="tag">React</div>
							<div className="tag">Logo</div>
						</div>
					</div>
				</div>
			</div>
		);

	}
});

export default Feed
