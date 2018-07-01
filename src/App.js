import React, { Component } from 'react';
import './App.css';
import Textbox from './Component/Textbox'
import Button from './Component/Button'
import Showtotal from './Component/Showtotal'

class App extends Component {
  state = {
    arrayTotal: [],
    inputs: ['text-0'],
  }

  setResult = (resultmultiple, i) => {
    let arraysum = this.state.arrayTotal.slice()
    arraysum[i] = resultmultiple
    this.setState({ arrayTotal: arraysum })
  }

  onaddTextbox = () => {
    let input = `input-${this.state.inputs.length}`
    this.setState({ inputs: this.state.inputs.concat(input) })
  }

  ResultOfarray = () => {
    var sum = 0
    for (let i = 0; i < this.state.arrayTotal.length; i++) {
      sum = sum + this.state.arrayTotal[i]
    }
    return sum
  }

  render() {
    return (
      <div className="App">
        <Button Click={this.onaddTextbox} />
        <Showtotal data={this.ResultOfarray()} />
        {this.state.inputs.map((input, i) => {
          return <Textbox  key={input} index={i} calculate={this.setResult} />
        })}
      </div>
    );
  }
}

export default App;