import "./Box.css"
import React, { Component } from "react";

class Box extends Component {
    static defaultProps = {
        color: "#55A"
    }
    constructor(props) {
        super(props);
        this.evtHandler = this.evtHandler.bind(this);
    }
    evtHandler(evt) {
        this.props.changeColor(this.props.color);
        console.log(this.props.color)
    }
    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.props.color }} onClick={this.evtHandler}> hello</div>
            
        )
    }
}

export default Box;