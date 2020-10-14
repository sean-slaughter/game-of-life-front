import React, { Component } from 'react'
import { createRef } from 'react';

export class Canvas extends Component {

    constructor(props){
        super(props)
        this.state = {
            down: false
        }
        this.canvas = createRef();
        this.rows = this.props.dims.rows
        this.cols = this.props.dims.cols
        this.width = this.props.dims.width
        this.height = this.props.dims.height
        this.cellSize = this.props.dims.cellSize
        this.gameGrid = this.props.gameGrid
    }

    render() {
        return (
            <canvas onClick={this.handleClick}onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} ref={this.canvas} width={this.width} height={this.height}></canvas>
        )
    }

    componentDidMount(){
        this.drawCanvas()
    }

    handleClick = (e) =>{
        let x = Math.floor(e.nativeEvent.offsetX/this.cellSize);
        let y = Math.floor(e.nativeEvent.offsetY/this.cellSize);
        console.log(y,x)
    }

    handleMouseDown = () => {
        this.setState({
            down: true
        })
    }
    handleMouseUp = () => {
        this.setState({
            down: false
        })
    }

    handleMouseMove = (e) => {
        if(this.state.down){
            let x = Math.floor(e.nativeEvent.offsetX/this.cellSize);
            let y = Math.floor(e.nativeEvent.offsetY/this.cellSize);
            console.log(x, y)
        }
    }

    drawCanvas = () => {
        const canvas = this.canvas.current;
        if(canvas){
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = "black";
            for(let i = 0; i < this.cols; i++){
                for(let j = 0; j < this.rows; j++){
                    if (!this.props.gameGrid[j][i]){
                        ctx.fillStyle = "black"
                    }
                    else{
                        ctx.fillStyle = "white";
                    } 
                    ctx.strokeRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize)
                    ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize)
                }
            }
        }

    }
}
export default Canvas
