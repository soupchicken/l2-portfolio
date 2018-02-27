import React from 'react'
import PropTypes from 'prop-types';

const FullPage = React.createClass({

	getInitialState(){
		return {
			transitioning:true
		}
	},

	componentDidMount(){
		this.setState({ transitioning: false })
	},

	componentDidUpdate( prevProps, prevState ){
		const { transitioning } = this.state;
		if ( prevProps.activePage !== this.props.activePage && !transitioning ) {
			this.setState({transitioning: true},
				setTimeout(() => this.setState({transitioning: false}), 200)
			)
		}
	},

	render(){
		const { transitioning } = this.state;
		const { project, activePage, history, history: { location }, match } = this.props;
		const {  utils:{ parseSearchString, stringifyQuery }} = this.context;

		const query = parseSearchString( location.search );

		const page = project.pages[activePage];

		return (
			<div id="FullPage" ref="fullPage" data-transitioning={ transitioning } onClick={ e => {
				if ( e.target === this.refs.fullPage )
					history.push({
						pathname:'/',
						search:stringifyQuery({ ...query, project:match.params.project_id }),
						state: { prevQuery: query }
					})
			}}>
				<div className="body">
					<img src={ page.image }/>
					<div className="details">
						<div className="title">{ page.title }</div>
						<div className="description"><p>{ page.description }</p></div>
					</div>
				</div>
				<div
					className="page-switch icon-caret-left"
					data-active={ activePage > 0 }
					onClick={() => {
						if ( activePage > 0 )
							history.push({
								pathname:location.pathname,
								search:stringifyQuery({ page:activePage - 1 }),
								state: { prevQuery: query }
							})
					}}
				/>
				<div
					className="page-switch icon-caret-right"
					data-active={ activePage + 1 < project.pages.length }
					onClick={() => {
						if ( activePage + 1 < project.pages.length  )
							history.push({
								pathname:location.pathname,
								search:stringifyQuery({ page:activePage + 1 }),
								state: { prevQuery: query }
							})
					}}
				/>
			</div>
		);
	}

});

FullPage.contextTypes = {
	utils: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default FullPage
