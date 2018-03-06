import React from 'react'
import PropTypes from 'prop-types';

const Page = React.createClass({

	getInitialState(){
		return {
			imageLoaded: false,
			transitioning: true,
			descriptionFaded:false
		}
	},
	fadeDelay: 6000,
	fadeTimeout: null,

	componentDidMount(){
		this.setState({ transitioning: false })

		const { image } = this.refs;
		// Hover over image long enough and the text fades out showing the whole image
		image.addEventListener('mouseenter', this.startFading );
		image.addEventListener('mousemove', this.resetFadeDelay );
		image.addEventListener('mouseleave', this.stopFading );
	},

	startFading(){
		this.fadeTimeout = setTimeout(() => {
			this.setState({ descriptionFaded: true });
		}, this.fadeDelay )
	},

	resetFadeDelay(){
		const { descriptionFaded } = this.state;
		if ( descriptionFaded )
			this.setState({ descriptionFaded: false })
		clearTimeout(this.fadeTimeout);
		this.startFading();
	},

	stopFading(){
		this.setState({ descriptionFaded: false }, () => {
			clearTimeout( this.fadeTimeout );
		});
	},

	componentWillUnmount(){
		const { image } = this.refs;
		image.removeEventListener('mouseenter', this.startFading );
		image.removeEventListener('mousemove', this.resetFadeDelay );
		image.removeEventListener('mouseleave', this.stopFading );
	},

	componentDidUpdate( prevProps ){
		const { transitioning } = this.state;
		if ( prevProps.activePage !== this.props.activePage && !transitioning )
			this.setState({ transitioning: true }, () => setTimeout(() => this.setState({transitioning: false}), 200 ))
	},
	render() {
		const { imageLoaded, descriptionFaded, transitioning } = this.state;
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
				data-description-faded={ descriptionFaded }
				data-transparent={!imageLoaded}
				data-relative-position={ relativePosition }
				data-is-active={isFocused}>
					<img
						ref="image"
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
				<div className="body" data-transparent={ !isFocused }>
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
