import projects from '../static/projects.js'
export default (
	data = {
		projects
	},
	action
) => {
	switch ( action.type ){
		default:
			return data;
	}
}
