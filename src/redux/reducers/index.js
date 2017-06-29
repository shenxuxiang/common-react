import { combineReducers } from 'redux'
import { userInfo, counter } from './childreducers.js'

const reducers = combineReducers({
	userInfo,
	counter
})
export default reducers