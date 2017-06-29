import React, { Component } from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class List extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
		return (
			<div>
				this is the list page
			</div>
		)
	}
}
