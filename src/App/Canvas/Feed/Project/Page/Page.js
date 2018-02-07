import React from 'react'
import { Route } from 'react-router-dom';

const Page = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		const { page, position } = this.props;

		return (
			<div
				className="page"
				style={{ width:page.imageWidth }}
				data-position={ position }>
				<div className="description">
					<p>{ page.description }</p>
				</div>
				<div className="image">
					<img src={ page.image }/>
				</div>
			</div>
		);

	}
});

export default Page
