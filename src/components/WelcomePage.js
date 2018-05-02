import React, { Component } from 'react';
import '../App.css';

export default class WelcomePage extends Component {
	render() {
		return (
			<div>
				<span className="centerScreen title">World Dairy Expo</span>
				<span className="centerScreen rules">
					How to play:
					<br />
					1. click on cows
					<br />
					2. do not click on non-cows
					<br />
					3. you have 30 seconds
				</span>
			</div>
		)
	}
}
