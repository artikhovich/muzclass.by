import constantsDB from './constantsDB';
const constants = (state = {constantsDB}, action) =>{
	switch (action.type) {
		case 'ADD_CONSTANT':
			return state
		default:
			return state
	}
}
export default constants;