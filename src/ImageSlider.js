import React, { Component } from 'react';

export default class ImageSlider extends Component {
  // Set initial state
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  } 
}
