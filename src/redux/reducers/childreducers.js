import * as actionTypes from '../store/actiontypes.js'
import initState from '../store/state.js'

export const userInfo = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_CITY:
			return Object.assign({}, state, action.data)
		case actionTypes.UPDATE_USERNAME:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
export const counter = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return Object.assign({}, state, action.data)
		case actionTypes.DECREMENT:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}