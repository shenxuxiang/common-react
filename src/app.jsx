import React, { Component } from 'react'
import RouteMap from './routemap.jsx'
import { Provider } from 'react-redux'
import configStore from './redux/store/configstore.js'
import pureRenderMixin from 'react-addons-pure-render-mixin'

const store = configStore()

export default
class App extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        return (
            <Provider store={store}>
                <RouteMap/>
            </Provider>
        )
    }
}
