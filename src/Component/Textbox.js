import React, { Component } from 'react'
import './style.css'

class Textbox extends Component {
    state = {
        number1: 0,
        number2: 0,
    }
    multiple = (event) => { this.setState({ [event.target.name]: event.target.value, }, this.result) }
    result = () => { this.props.calculate(this.state.number1 * this.state.number2, this.props.index) }

    render() {
        return (
            <div>
                <input className='inputnumber' name='number1' type='number' onChange={this.multiple} />
                X
                <input className='inputnumber' name='number2' type='number' onChange={this.multiple} />
                = 
                {this.state.number1 * this.state.number2}
            </div>
        )
    }
}
export default Textbox