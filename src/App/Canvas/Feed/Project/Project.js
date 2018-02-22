import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';
import $ from 'jquery';
let Velocity = {};
if ( typeof window !== 'undefined' )
	Velocity = require('velocity-animate')

import Page from './Page/Page'

const Project = React.createClass({

	componentDidMount(){
		const { project } = this.props;
		const { utils:{ parseSearchString }, history:{ location }} = this.context;
		const query = parseSearchString( location.search );

		if( parseInt(query.project) === project.id ){
			this.focusOnProject( 0 );
			this.scrollToPage( parseInt(query.page), 0 )
		}
	},

	componentDidUpdate(){
		const { project } = this.props;
		const { utils:{ parseSearchString }, history:{ location }} = this.context;
		const query = parseSearchString( location.search );
		const prevQuery = location.state && location.state.prevQuery ? location.state.prevQuery : {};

		if( parseInt(query.project) === project.id )
			this.focusOnProject( 200 );

		if ( query.project !== prevQuery.project && query.page ){
			this.scrollToPage(parseInt(query.page), 0)
		} else if ( parseInt( query.project ) === project.id && query.page !== prevQuery.page ){
			this.scrollToPage(parseInt(query.page), 300)
		}
	},

	scrollToPage( targetPage, animationSpeed ){
		const { pageWrap } = this.refs;
		const page = $(this.refs.pageWrap).find(`.page[data-position="${targetPage}"]`);
		if ( page[0] ){
			const pageX = $(page).position().left;
			Velocity( pageWrap, 'stop');
			Velocity( pageWrap, { left:-pageX }, { duration: animationSpeed }, 'ease-out');
		}
	},


	focusOnProject( animationSpeed ){
		const container = {
			element: document.getElementById('Projects'),
			height:$(document.getElementById('Projects')).outerHeight(),
			yTop: $(document.getElementById('Projects')).offset().top
		}
		const project = {
			element: this.refs.project,
			yTop: $(this.refs.project).offset().top,
			yBottom: $(this.refs.project).offset().top + $(this.refs.project).outerHeight()
		}

		Velocity( container.element, 'stop' );
		if ( project.yTop - container.yTop < 0 ) {
			Velocity( project.element, 'scroll', { container: $(container.element), duration: animationSpeed });
		} else if ( project.yBottom > ( container.height + container.yTop )){
			const offset = ( project.yBottom - container.height ) - project.yTop;
			Velocity( project.element, 'scroll', { container: $(container.element), offset, duration: animationSpeed });
		}
	},

	render() {
		const { project, isLastProject } = this.props;
		const { utils:{ parseSearchString, stringifyQuery }, history, windowHeight } = this.context;
		const query = parseSearchString( history.location.search );

		const pageComponents = [], pageSelectors = [];
		const focusedProject = parseInt(query.project);
		const focusedPage = parseInt(query.page);
		const isFocusedProject = project.id === focusedProject;
		_.each( project.pages, ( page, i ) => {
			const isFocusedPage = isFocusedProject && i === focusedPage;
			const relativePosition = isFocusedProject ? i - focusedPage : null;
			page.title === 'BREAK' ?
				pageComponents.push(<div key={`${project.id}-${i}`} className="break" />) :
				pageComponents.push(

					<Page
						key={`${project.title}-${page.title}-${i}`}
						page={ page }
						isFocused={ isFocusedPage }
						position={ i }
						relativePosition={ relativePosition }
						onClick={() => {
							if (!isFocusedPage)
								history.push({
									pathname:history.location.pathname,
									search: stringifyQuery({ ...query, project:project.id, page:i }),
									state: { prevQuery: query }
								})
						}}
					/>
				)
			if ( page.title !== 'BREAK' )
				pageSelectors.push(
					<div
						key={`${project.title}-${page.title}-selectors-${i}`}
						className="page-selector"
						data-focused={ isFocusedPage }
						onClick={() => {
							isFocusedPage ?
								history.push({ pathname:history.location.pathname }) :
								history.push({
									pathname:history.location.pathname,
									search: stringifyQuery({ ...query, project:project.id, page:i }),
									state: { prevQuery: query }
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
				style={{ marginBottom: isLastProject && windowHeight && Math.round(windowHeight)/16 - 30 > 0 ? `${Math.round(windowHeight)/16 - 30}rem` : 0 }}
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
