import React from 'react'
import { Route } from 'react-router-dom';
import _ from 'lodash';

import Page from './Page/Page'

const Project = React.createClass({

	getInitialState(){
		return {
			activePageIndex: 0
		}
	},

	render() {
		const { activePageIndex } = this.state;
		const { project } = this.props;

		const pageComponents = [], pageSelectors = [];
		_.each( project.pages, ( page, i ) => {
			const isActive = i === activePageIndex
			pageComponents.push(
				<Page
					key={`${project.title}-${page.title}`}
					page={ page }
					position={ i - activePageIndex }
				/>
			)
			pageSelectors.push(
				<div
					key={`${project.title}-${page.title}-selectors`}
					className="page-selector"
					data-active={ isActive }
					onClick={() => {
						if ( !isActive )
							this.setState({ activePageIndex: i })
					}}>
					{ page.title }
				</div>
			)
		})

		return (
			<div className="project">
				<div className="title">
					{ project.title }
				</div>
				<div className="page-selectors">
					{ pageSelectors }
				</div>
				<div className="pages">
					{ pageComponents }
				</div>
			</div>
		);

	}
});

export default Project
