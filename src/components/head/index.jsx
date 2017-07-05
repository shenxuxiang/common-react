import './style.css'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import pureRenderMixin from 'react-addons-pure-render-mixin'

import apis from '../../common/apis.js'
//import utils from '../../common/utils.js'

export default
class Head extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    handle () {
    	apis.getAPIOne().then(resp => {
    		if (resp.status === 200) {
    			console.log(resp.data)
    		}
    	}).catch(error => {
    		console.log(error)
    	})
    }
    componentWillUnmount () {
    	apis.cancel()
    }
	render () {
        const { userInfo, counter } = this.props
		return (
			<ul className="nav-header">
				<li className="nav-header-item">
					<NavLink to="/home">home</NavLink>
				</li>
				<li className="nav-header-item">
					<NavLink to="/list">list</NavLink>
				</li>
				<li className="nav-header-item">
					<NavLink to="/detail">detal</NavLink>
				</li>
				<li className="nav-header-item">
					{userInfo.name}
				</li>
                <li className="nav-header-item">
                    {userInfo.city}
                </li>
                <li className="nav-header-item">
                    {counter.count}
                </li>
			</ul>
		)
	}
}
