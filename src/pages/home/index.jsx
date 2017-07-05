import React, { Component } from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/store/actions.js'

import Button from '../../components/button'

class Home extends Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        const { dispatchActions, userInfo, counter } = this.props
		return (
			<div>
				<p>this is the home page</p>
                <Button
                    actions={dispatchActions}
                    userInfo={userInfo}
                    counter={counter}
                />
			</div>
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
)(Home)
