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

    componentDidMount(){
        this.drawCanvas()
    }

    drawCanvas = () => {
        const canvas = this.canvas.current;
        if(canvas){
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = "black";
            for(let i = 0; i < this.cols; i++){
                for(let j = 0; j < this.rows; j++){
                    ctx.fillStyle = "white";
                    ctx.strokeRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize)
                    ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize)
                }
            }
        }

    }
}
export default Canvas
