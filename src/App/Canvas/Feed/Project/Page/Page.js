import React from 'react'

const Page = React.createClass({

	render() {
		const { page, onClick, position, isFocused, relativePosition } = this.props;

		return (
			<div
				className="page"
				onClick={ onClick }
				data-position={ position }
				data-off-screen={ relativePosition < 0 }
				data-relative-position={ relativePosition }
				data-is-active={isFocused}>
					<img src={ page.image }/>
					<div className="label">
						{ page.title }
					</div>
				<div className="description">
					<p>{ page.description }</p>
				</div>

			</div>
		);

	}
});

export default Page
