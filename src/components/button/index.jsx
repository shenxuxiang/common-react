import './style.css'
import React, { Component } from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
export default
class Button extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    handleUpdatName () {
        this.props.actions.increment({
            count: this.props.counter.count + 10
        })
    }
    render () {
        const { userInfo, actions } = this.props
        return (
            <div
                className="my-button"
                onClick={this.handleUpdatName.bind(this)}
            >
                点击切换姓名
            </div>
        )
    }
}
