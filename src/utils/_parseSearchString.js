import _ from 'lodash'

const parseSearchString = ( searchString, excludedParams = [] ) => {
	let query = {};
	const queryString = searchString.substring(1);
	if ( queryString.length > 0 ){
		const params = queryString.split('&');
		_.each( params, ( param, i ) => {
			if ( !_.includes( excludedParams, param )){
				var pair = param.split('=');
				query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
			}
		});
	}

	return query
}

export default parseSearchString
