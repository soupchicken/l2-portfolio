import React from 'react'
import _ from 'lodash';
import { Route } from 'react-router-dom';
import Project from './Project/Project'

const Feed = React.createClass({

	getInitialState(){
		return {
			activeFilter:null,
			activeProject: null
		}
	},

	clearFilter(){
		this.setState({ activeFilter: null })
	},

	activateFilter( newFilter ){
		this.setState({ activeFilter:newFilter })
	},

	render() {

		const { activeFilter } = this.state;
		const { projects } = this.props;

		const projectComponents = [];
		_.each( projects, ( project, i ) => {
			projectComponents.push(
				<Project
					key={ `${project.title}-${i}` }
					project={ project }
				/>
			)
		})

		return (
			<div id="Feed">
				<div className="header">
					<img
						className="logo"
						data-filtered={ !!activeFilter }
						onClick={ this.clearFilter }
						src="/images/logo.svg"
					/>
					<div className="tags-window">
						<div className="tags-wrap">
							<div
								className="tag"
								data-active={ activeFilter === 'graphic-design' }
								onClick={() => {
									activeFilter !== 'graphic-design' ?
										this.activateFilter('graphic-design') : this.clearFilter()
								}}>
								Graphic Design
							</div>
							<div
								className="tag"
								data-active={ activeFilter === 'react' }
								onClick={() => {
									activeFilter !== 'react' ?
										this.activateFilter('react') : this.clearFilter()
								}}>
								React
							</div>
							<div
								className="tag"
								data-active={ activeFilter === 'logos' }
								onClick={() => {
									activeFilter !== 'logos' ?
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

export default Feed
