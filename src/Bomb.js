import React, { Component } from 'react';

export default class Bomb extends Component {

	constructor(props) {
		super()
		this.state = { secondsLeft: props.initialCount }
	}

	setCounter = () => {
		for (let i=`${this.props.initialCount}`; i>=0; i--) {
			return this.setState({ secondsLeft: `${i}`})
		}
		
	}

	render() {
		if (this.state.secondsLeft > 0) {
			return ( 
		    	<div>
		    		{this.state.secondsLeft} seconds left before I go boom!
		    	</div>	
		    )
		} else {
			return (
				<div>
					Boom!
				</div>
			)
		}

	}
}