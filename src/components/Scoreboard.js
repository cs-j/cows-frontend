import React, { Component } from 'react';
import GameScreen from './GameScreen';

export default class Scoreboard extends Component {
	render() {
    console.log('cowCount in Scoreboard is', GameScreen.cowCount)
		return (
			<div>
				<span className="centerScreen score">{GameScreen.cowCount}</span>
			</div>
		)
	}
}
