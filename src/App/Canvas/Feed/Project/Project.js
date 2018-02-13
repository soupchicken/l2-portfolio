import React from 'react'
import { Route } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import $ from 'jquery';
let Velocity = {};
if ( typeof window !== 'undefined' )
	Velocity = require('velocity-animate')

import Page from './Page/Page'

const Project = React.createClass({

	getInitialState(){
		return {
			activePageIndex: null,
			pageWidths:[]
		}
	},

	componentDidMount(){
		setTimeout(() => {
			const { project } = this.props;
			const { utils:{ parseSearchString }, history } = this.context;
			const query = parseSearchString( history.location.search );
			const prevQuery = parseSearchString( history.location.state ? history.location.state.prevQuery : '' );

			if( parseInt(query.project) === project.id ){
				this.focusOnProject( 0 );
				this.scrollToPage( parseInt(query.page), 0 )
			}

		}, 0)
	},

	componentDidUpdate(){
		const { project } = this.props;
		const { utils:{ parseSearchString }, history } = this.context;
		const query = parseSearchString( history.location.search );
		const prevQuery = parseSearchString( history.location.state ? history.location.state.prevQuery : '' );

		if( parseInt(query.project) === project.id )
			this.focusOnProject( 200 );

		if ( query.project !== prevQuery.project && query.page ) {
			this.scrollToPage(parseInt(query.page), 0)
		} else if ( parseInt(query.project) === project.id && ( query.page !== prevQuery.page )) {
			this.scrollToPage(parseInt(query.page), 200)
		}
	},

	scrollToPage( targetPage, animationSpeed ){
		const { pageWrap } = this.refs;
		const page = $(this.refs.pageWrap).find(`.page[data-position="${targetPage}"]`);
		if ( page[0] ){
			const leftOffset = $(page).position().left;
			Velocity(pageWrap, 'stop');
			Velocity(pageWrap, { left: -leftOffset }, { duration: animationSpeed }, 'ease-out');
		}
	},

	focusOnProject( animationSpeed ){
		const { windowHeight } = this.context;
		const { project } = this.refs;
		const projects = document.getElementById('Projects')

		const projectsHeight = $(projects).outerHeight();
		const projectsDistanceFromTop = windowHeight - projectsHeight;

		const projectHeight = $(project).outerHeight();
		const projectTop = $(project).offset().top - projectsDistanceFromTop;
		const projectBottom = projectTop + projectHeight;

		Velocity(projects, 'stop')
		if ( projectTop < 0 ) {
			Velocity(project, 'scroll', {container: $(projects), duration: animationSpeed});
		} else if ( projectBottom > projectsHeight ){
			Velocity(project, 'scroll', {container: $(projects), offset: -projectTop + ( projectBottom - projectsHeight), duration: animationSpeed});
		}
	},

	clearFocus(){
		this.setState({ activePageIndex: null })
	},

	render() {
		const { project, isLastProject } = this.props;
		const { utils:{ parseSearchString, stringifyQuery }, history, windowHeight } = this.context;
		const query = parseSearchString( history.location.search );

		const pageComponents = [], pageSelectors = [];
		const isFocusedProject = parseInt(query.project) === project.id;
		_.each( project.pages, ( page, i ) => {
			// const isActivePage = isFocusedProject && i === activePageIndex;
			const isActivePage = isFocusedProject && i === parseInt(query.page);
			const relativePosition = isFocusedProject ? i - parseInt(query.page) : null;
			pageComponents.push(
				<Page
					key={`${project.title}-${page.title}-${i}`}
					page={ page }
					isActive={ isFocusedProject && i === parseInt(query.page) }
					position={ i }
					relativePosition={ relativePosition }
					onClick={() => {
						if (!(isFocusedProject && i === parseInt(query.page)))
							history.push({
								pathname:history.location.pathname,
								search: stringifyQuery({ ...query, project:project.id, page:i }),
								state: { prevQuery: stringifyQuery( query )}
							})
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
							history.push({ pathname:history.location.pathname }) :
							history.push({
								pathname:history.location.pathname,
								search: stringifyQuery({ ...query, project:project.id, page:i }),
								state: { prevQuery: stringifyQuery( query )}
							})
					}}>
					{ page.title }
				</div>
			)
		})

		return (
			<div
				className="project"
				ref="project"
				style={{ marginBottom: isLastProject && windowHeight && Math.round(windowHeight/16) - 30 > 0 ? `${Math.round(windowHeight/16) - 30}rem` : 0 }}
				data-project-focused={ isFocusedProject }>
				<div className="title">
					{ project.title }
				</div>
				<div className="page-selectors" data-hidden={ !isFocusedProject }>
					{ pageSelectors }
				</div>
				<div className="overview">
					<p>{ project.overview }</p>
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

Project.contextTypes = {
	utils: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	windowHeight: PropTypes.number.isRequired
};


export default Project
