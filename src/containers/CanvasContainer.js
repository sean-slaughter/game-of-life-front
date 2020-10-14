import React, { Component } from 'react'
import Canvas from '../components/Canvas'
import { connect } from 'react-redux'

export class CanvasContainer extends Component {
    render() {
        return (
            <div>
                <Canvas/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dims: state.dims,
        gameGrid: state.gameGrid
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect()(CanvasContainer)
