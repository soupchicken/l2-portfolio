import React from 'react'
import { Route } from 'react-router-dom';

import Feed from './Feed/Feed'

const Canvas = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		return (
			<div id="Canvas">
				<Feed />
			</div>
		);

	}
});

export default Canvas
