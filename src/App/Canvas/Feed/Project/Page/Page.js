import React from 'react'
import PropTypes from 'prop-types';

const Page = React.createClass({

	getInitialState(){
		return {
			imageLoaded: false,
			transitioning: true
		}
	},

	componentDidMount(){
		this.setState({ transitioning: false })
	},

	componentDidUpdate( prevProps ){
		const { transitioning } = this.state;
		if ( prevProps.activePage !== this.props.activePage && !transitioning )
			this.setState({ transitioning: true }, () => setTimeout(() => this.setState({transitioning: false}), 200 ))
	},
	render() {
		const { imageLoaded, transitioning } = this.state;
		const { page, onClick, position, isFocused, relativePosition } = this.props;
		const { history, utils:{ parseSearchString, stringifyQuery }} = this.context;

		const query = parseSearchString( history.location.search );

		return (
			<div
				className="page"
				onClick={ onClick }
				data-position={ position }
				data-off-screen={ relativePosition < 0 }
				data-transitioning={ transitioning }
				data-transparent={!imageLoaded}
				data-relative-position={ relativePosition }
				data-is-active={isFocused}>
					<img
						src={ page.image }
						onLoad={() => this.setState({ imageLoaded:true })}
					/>
					<div className="label">
						{ page.title }
					</div>
				<div
					className="expand-btn icon-expand"
					onClick={() => {
						history.push({
							pathname:`/project/${query.project}`,
							search: stringifyQuery({ page:query.page }),
							state: { prevQuery: query }
						})
					}}
				/>
				<div
					className="close-project icon-cancel"
					onClick={() => {
						history.push({
							pathname:'/',
							state: { prevQuery: query }
						})
					}}
				/>
				<div className="body">
					<div className="page-title">
						{ page.title }
					</div>
					<div className="description">
						<p>{ page.description }</p>
					</div>
				</div>

			</div>
		);

	}
});

Page.contextTypes = {
	utils: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default Page
