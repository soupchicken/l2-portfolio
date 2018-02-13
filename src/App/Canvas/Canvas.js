import React from 'react'
import { Route } from 'react-router-dom';

import Feed from './Feed/ConnectedFeed'

const Canvas = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		return (
			<div id="Canvas">
				<Route path="/" component={ Feed }/>
			</div>
		);

	}
});

export default Canvas
