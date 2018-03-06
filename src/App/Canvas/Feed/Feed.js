import React from 'react'
import _ from 'lodash';
import { Route } from 'react-router-dom';
import Project from './Project/Project'
import PropTypes from 'prop-types';

const Feed = React.createClass({

	clearFilter(){
		const { history } = this.context;
		history.push({ pathname:history.location.pathname });
	},

	activateFilter( newFilter ){
		const { utils:{ stringifyQuery }, history } = this.context;
		// this.refs.projects.scrollTop = 0;
		history.push({ pathname:history.location.pathname, search:stringifyQuery({ filter:newFilter }) })
	},

	render() {

		const { projects } = this.props;

		const { utils:{ parseSearchString }, history } = this.context;
		const query = parseSearchString( history.location.search );

		const activeProjects = !query.filter ? projects :
			projects.filter( project => _.includes( project.tags, query.filter ));

		const projectComponents = [];
		_.each( activeProjects, ( project, i ) => {
			projectComponents.push(
				<Route path="/" key={`${project.title}-${i}`} render={ routeProps => {
					return (
						<Project
							project={ project }
							position={ i }
							isLastProject={ i + 1 === projects.length }
							{ ...routeProps }
						/>
					)}}/>
			)
		})

		return (
			<div id="Feed">
				<div className="header">
					<div className="tags-window">
						<div className="tags-wrap">
							<div
								className="tag"
								data-active={ !query.filter }
								onClick={ this.clearFilter }>
								All Projects
							</div>
							<div
								className="tag"
								data-active={ query.filter && query.filter === 'design' }
								onClick={() => {
									query.filter || query.filter !== 'design' ?
										this.activateFilter('design') : this.clearFilter()
								}}>
								Graphic Design
							</div>
							<div
								className="tag"
								data-active={ query.filter && query.filter === 'frontend' }
								onClick={() => {
									query.filter || query.filter !== 'frontend' ?
										this.activateFilter('frontend') : this.clearFilter()
								}}>
								Frontend
							</div>
							<div
								className="tag"
								data-active={ query.filter && query.filter === 'backend' }
								onClick={() => {
									query.filter || query.filter !== 'backend' ?
										this.activateFilter('backend') : this.clearFilter()
								}}>
								Backend
							</div>
							<div
								className="tag"
								data-active={ query.filter && query.filter === 'react' }
								onClick={() => {
									query.filter || query.filter !== 'react' ?
										this.activateFilter('react') : this.clearFilter()
								}}>
								React
							</div>
						</div>
					</div>
				</div>
				<div id="Projects" ref="projects">
					{ projectComponents }
				</div>
			</div>
		);
	}
});

Feed.contextTypes = {
	utils: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default Feed
