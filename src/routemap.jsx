import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/store/actions.js'

import Home from './pages/home'
import List from './pages/list'
import Detail from './pages/detail'
import Head from './components/head'

class RouteMap extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
	render () {
		return (
			<Router>
				<div className="contain-box">
					<Head
						userInfo={this.props.userInfo}
					/>
					<Route path="/home" component={Home}/>
					<Route path="/list" component={List}/>
					<Route path="/detail" component={Detail}/>
					<Switch>
						<Redirect exact from="/" to="/home"/>
					</Switch>
				</div>
			</Router>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		userInfo: state.userInfo,
		counter: state.counter
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchActions: bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouteMap)
