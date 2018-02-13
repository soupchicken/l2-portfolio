import _ from 'lodash'

const stringifyQuery = ( query, excludedParams = [] ) => {
  let queryString = '';
  _.each(query, ( value, key ) => {
    if ( !_.includes( excludedParams, key )){
			queryString += queryString ?  `&${key}=${value}` : `?${key}=${value}`
    }
  });
  return queryString
}

export default stringifyQuery
