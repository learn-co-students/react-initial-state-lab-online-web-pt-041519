// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component{

    constructor(props){
        super()
        this.state = { 
            secondsLeft: props.initialCount
        }
    }

    renderText = () => {
        if(this.state.secondsLeft > 0){
        return(<p>{this.state.secondsLeft} seconds left before I go boom!</p>)
        }else if (this.state.secondsLeft === 0){
        return(<h1>Boom!</h1>)
        }
    }


    render(){
        return(
            <div>
                {this.renderText()}
            </div>
        )
    }
}