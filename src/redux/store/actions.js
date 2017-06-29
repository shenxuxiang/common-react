import * as actionTypes from './actiontypes.js'

export const updateCity = (data) => {
	return {
		type: actionTypes.UPDATE_CITY,
		data
	}
}
export const updateUserName = (data) => {
	return {
		type: actionTypes.UPDATE_USERNAME,
		data
	}
}
export const increment = (data) => {
	return {
		type: actionTypes.INCREMENT,
		data
	}
}
export const decrement = (data) => {
	return {
		type: actionTypes.DECREMENT,
		data
	}
}