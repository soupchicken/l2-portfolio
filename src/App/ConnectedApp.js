import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = function( state, ownProps ){
	return {
    NODE_ENV: state.environment.NODE_ENV,
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
  )( App )
