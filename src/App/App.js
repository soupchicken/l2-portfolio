import React from 'react'
import Backbone from 'backbone'
import _ from 'lodash'
import MobileDetect from 'mobile-detect';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar'
import Canvas from './Canvas/Canvas'
import FullPage from './FullPage/ConnectedFullPage'

import utils from '../utils'
let windowHeight = 0;
if ( typeof window !== 'undefined' )
	windowHeight = window.innerHeight;

const App = React.createClass({

  getInitialState(){
    let md = {};
    if ( typeof window !== 'undefined' && window.navigator )
      md = new MobileDetect(window.navigator.userAgent);
    return {
      isMobile: !!md.mobile && md.mobile() !== null,
      dispatcher: _.clone(Backbone.Events)
    }
  },

	componentDidMount(){
		if ( typeof window !== 'undefined' )
			window.addEventListener('resize', () => {
				windowHeight = window.innerHeight;
			})
	},

  getChildContext(){
    const { dispatcher, isMobile } = this.state;
		const { history, match } = this.props;
    return {
      isMobile,
			windowHeight,
      dispatcher,
			utils,
			history,
			match
    }
  },

	assignStaticContext(){
		const { staticContext, history, location, match } = this.props;
		console.log(history, location, match)
		switch( location.pathname ){
			// VALID PATHS
			case '/':
			// TODO: MAKE THIS INTELLIGENT
			case '/project/0':
			case '/project/1':
			case '/project/2':
			case '/project/3':
			case '/project/4':
			case '/project/5':
			case '/project/6':
				return

			// SERVER REDIRECT
			default:
				staticContext.redirectUrl = '/'
		}
	},

  render() {
    const { isMobile } = this.state;
		const { staticContext } = this.props;

		// Determine if routes are valid, pass error information to server via staticContext object
    if ( staticContext ) this.assignStaticContext()

		if ( isMobile ){
      return (
        <div id="MobileApp">THIS IS A MOBILE APP</div>
      );
    } else {
      return (
        <div id="App">
					<Route path="/project/:project_id" component={FullPage} />
					<Route path="/" component={Sidebar} />
					<Route path="/" component={Canvas} />
				</div>
      );
    }
  }
});

App.childContextTypes = {
  dispatcher: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
	utils: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	windowHeight: PropTypes.number.isRequired
};

export default App
