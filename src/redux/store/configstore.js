import { createStore } from 'redux'
import reducers from '../reducers'
import initState from './state'

const configStore = () => {
	const store = createStore(reducers, initState, window.devToolsExtension ? window.devToolsExtension() : undefined)
	return store
}
export default configStore