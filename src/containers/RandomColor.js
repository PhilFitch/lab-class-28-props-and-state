import React, { Component } from 'react';
import ColorChanger from '../components/colors/ColorChanger';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black'
  };

  chooseColor(colors) {
    let idx = Math.floor((Math.random()) * (colors.length));
    let color = colors[idx];
    console.log(idx);
    return {
      backgroundColor: color
    };
  }
  
  componentDidMount() {
    const colors = ['red', 'green', 'black', 'yellow', 'purple', 'blue', 'orange', 'violet', 'lavender', 'brown'];
    this.changeColor(colors, this.chooseColor);
  }

  changeColor(colors, chooseColor) {
    setInterval(() => this.setState(chooseColor(colors)), 1000);
  }
  
  render() {
    
    return (
      <ColorChanger backgroundColor={this.state.backgroundColor} />
    );
  }
}
