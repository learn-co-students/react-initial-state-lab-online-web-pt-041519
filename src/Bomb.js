import React, { Component } from 'react';

export default class Bomb extends Component {
  // Set initial state
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  // Decrement secondsLeft
  decrement = () => {
    const newCount = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newCount
    })
  }

  render() {
    return (
      <div>
        { this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!' }
      </div>
    )
  } 
}
