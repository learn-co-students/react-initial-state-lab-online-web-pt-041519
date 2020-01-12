import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    
    render() {
        // const countdown = function() {
            if (this.state.secondsLeft === 0) 
                return ('Boom!')
            else {
                return `${this.state.secondsLeft} seconds left before I go boom!`  
            }
        // return(
        //     <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        //     )
    }
}