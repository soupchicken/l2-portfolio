import React from 'react'

const Page = React.createClass({

	getInitialState(){
		return {
			imageLoaded: false
		}
	},
	render() {
		const { imageLoaded } = this.state;
		const { page, onClick, position, isFocused, relativePosition } = this.props;

		return (
			<div
				className="page"
				onClick={ onClick }
				data-position={ position }
				data-off-screen={ relativePosition < 0 }
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
				<div className="body">
					<div className="page-title">
						{ page.title }
					</div>
					<p>{ page.description }</p>
				</div>

			</div>
		);

	}
});

export default Page
