import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Feed from './Feed'

const mapStateToProps = function( state, ownProps ){
	console.log(state);
	return {
		projects: state.data.projects
	}
}

const mapDispatchToProps = function( dispatch ){
	return {}
}

export default
connect(
	mapStateToProps,
	mapDispatchToProps
)( Feed )
