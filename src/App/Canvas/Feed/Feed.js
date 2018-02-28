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
		history.push({ pathname:history.location.pathname, search:stringifyQuery({ filter:newFilter }) })
	},

	render() {

		const { projects } = this.props;

		const { utils:{ parseSearchString }, history } = this.context;
		const query = parseSearchString( history.location.search );

		const projectComponents = [];
		_.each( projects, ( project, i ) => {
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
								data-active={ query.filter && query.filter === 'react' }
								onClick={() => {
									query.filter || query.filter !== 'react' ?
										this.activateFilter('react') : this.clearFilter()
								}}>
								React
							</div>
							<div
								className="tag"
								data-active={ query.filter && query.filter === 'logos' }
								onClick={() => {
									query.filter || query.filter !== 'logos' ?
										this.activateFilter('logos') : this.clearFilter()
								}}>
								Logos
							</div>
						</div>
					</div>
				</div>
				<div id="Projects">
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
