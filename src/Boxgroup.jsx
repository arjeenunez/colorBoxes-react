import Box from "./Box";
import React, { Component } from "react";
import "./Boxgroup.css"
import Randomizer from "./Randomizer"

class Boxgroup extends Component {
    static defaultProps = {
        boxQuantity: 16,
    }
    constructor(props) {
        super(props);
        this.state = {
            colors: Array.from({ length: 16 }, el => Randomizer())
        }
        this.colorChange = this.colorChange.bind(this);
    }
    colorChange(color) {
        this.setState(st => ({
            colors: st.colors.map(el => el === color ? Randomizer() : el)
        }))
    }
    render() {
        const allColors = this.state.colors;
        return (
            <div className="Boxgroup">
                {allColors.map((el, i) => (
                    <Box key={ i } color={el} changeColor={ this.colorChange } />
                ))}
            </div>
        )
    }
}

export default Boxgroup;