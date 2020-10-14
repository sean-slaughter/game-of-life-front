import React, { Component } from 'react'
import { createRef } from 'react';

export class Canvas extends Component {

    constructor(props){
        super(props)
        this.canvas = createRef();
    }

    render() {
        return (
            <canvas ref={this.canvas}></canvas>
        )
    }
}
export default Canvas
