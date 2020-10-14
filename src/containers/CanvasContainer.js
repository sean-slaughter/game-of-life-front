import React, { Component } from 'react'
import Canvas from '../components/Canvas'
import { connect } from 'react-redux'

export class CanvasContainer extends Component {
    render() {
        return (
            <div>
                <Canvas dims={this.props.dims} gameGrid={this.props.gameGrid}/>
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

export default connect(mapStateToProps)(CanvasContainer)
