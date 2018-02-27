import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import utils from '../../utils'

import FullPage from './FullPage'

const mapStateToProps = function( state, ownProps ){
	const { parseSearchString } = utils;
	const { match, location } = ownProps;

	let project;
	if ( match.params.project_id )
		project = state.data.projects[match.params.project_id];

	return {
		project: project || {},
		activePage: parseInt(parseSearchString(location.search).page) || 0
	}
}

const mapDispatchToProps = function( dispatch ){
	return {}
}

export default
connect(
	mapStateToProps,
	mapDispatchToProps
)( FullPage )
