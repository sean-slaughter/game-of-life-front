import React, { Component } from 'react'
import Canvas from '../components/Canvas'
import { connect } from 'react-redux'
import changeCell from '../actions/gameActions'

export class CanvasContainer extends Component {
    render() {
        return (
            <div>
                <Canvas dims={this.props.dims} gameGrid={this.props.gameGrid} changeCell={this.props.changeCell}/>
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
    return{
        changeCell: (coords) => {dispatch(changeCell(coords))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)
