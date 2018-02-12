import React from 'react'
import { Route } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';
let Velocity = {};
if ( typeof window !== 'undefined' ) {
	Velocity = require('velocity-animate')
}

import Page from './Page/Page'

const Project = React.createClass({

	getInitialState(){
		return {
			activePageIndex: null,
			pageWidths:[]
		}
	},

	componentDidUpdate( prevProps, prevState ){
		if ( this.state.activePageIndex !== prevState.activePageIndex )
			this.scrollToPage( this.state.activePageIndex, !_.isNull(prevState.activePageIndex) )
	},

	scrollToPage( targetPage, animate ){
		const { pageWrap } = this.refs;
		const page = $(this.refs.pageWrap).find(`.page[data-position="${targetPage}"]`);
		if ( page[0] ){
			const leftOffset = $(page).position().left;
			Velocity(pageWrap, 'stop');
			Velocity(pageWrap, { left: -leftOffset }, { duration: animate ? 200 : 400 }, 'ease-out');
		}
	},

	focusOnPage( targetPage, animate ){
		const { activePageIndex } = this.state;
		this.setState({ activePageIndex: targetPage }, () => {
			console.log($(this.refs.project).offset().top);
			if ( _.isNull( activePageIndex )){
				const projects = document.getElementById('Projects')
				console.log(projects);
				Velocity(projects, 'stop')
				Velocity(this.refs.project, 'scroll', { container:$(projects), duration: 200});
			}
		})
	},

	clearFocus(){
		this.setState({ activePageIndex: null })
	},

	render() {
		const { activePageIndex } = this.state;
		const { project } = this.props;

		let description = project.overview;
		const pageComponents = [], pageSelectors = [];
		const isFocusedProject = !_.isNull(activePageIndex);
		_.each( project.pages, ( page, i ) => {
			const isActivePage = isFocusedProject && i === activePageIndex;
			if ( isActivePage )
				description = page.description;
			const relativePosition = isFocusedProject ? i - activePageIndex : null;
			pageComponents.push(
				<Page
					key={`${project.title}-${page.title}-${i}`}
					page={ page }
					isActive={ isActivePage }
					position={ i }
					relativePosition={ relativePosition }
					onClick={() => {
						if ( !isActivePage )
							this.focusOnPage( i, isFocusedProject );
					}}
				/>
			)
			pageSelectors.push(
				<div
					key={`${project.title}-${page.title}-selectors-${i}`}
					className="page-selector"
					data-active={ isActivePage }
					onClick={() => {
						isActivePage ?
							this.clearFocus() :
							this.focusOnPage( i, isFocusedProject )
					}}>
					{ page.title }
				</div>
			)
		})

		return (
			<div
				className="project"
				ref="project"
				data-project-focused={ activePageIndex !== null }>
				<div className="title">
					{ project.title }
				</div>
				<div className="page-selectors" data-hidden={ !isFocusedProject }>
					{ pageSelectors }
				</div>
				<div className="overview">
					<p>{ description }</p>
				</div>

				<div className="pages">
					<div className="wrap" ref="pageWrap">
						{ pageComponents }
					</div>

				</div>
			</div>
		);

	}
});

export default Project
