import React from 'react'
import { Route } from 'react-router-dom';

const Page = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		const { page, onClick, position, isActive, relativePosition } = this.props;

		return (
			<div
				className="page"
				onClick={ onClick }
				data-position={ position }
				data-off-screen={ relativePosition < 0 }
				data-relative-position={ relativePosition }
				data-is-active={isActive}>
					<img src={ page.image }/>
					<div className="label">
						{ page.title }
					</div>
				<div className="description">
					<p>{ page.description }</p>
				</div>

			</div>
		);

	}
});

export default Page
