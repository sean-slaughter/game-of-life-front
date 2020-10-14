import React, { Component } from 'react'
import { createRef } from 'react';

export class Canvas extends Component {

    constructor(props){
        super(props)
        this.canvas = createRef();
        this.rows = this.props.dims.rows
        this.cols = this.props.dims.cols
        this.width = this.props.dims.width
        this.height = this.props.dims.height
        this.cellSize = this.props.dims.cellSize
        this.gameGrid = this.props.dims.gameGrid
    }

    render() {
        return (
            <canvas ref={this.canvas} width={this.width} height={this.height}></canvas>
        )
    }
}
export default Canvas
