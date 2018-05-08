import React, { Component } from 'react';
import '../App.css';
import cowImage from '../images/cow_head.png';
import globe from '../images/globe.png';
import { Container, Header } from 'semantic-ui-react'

export default class WelcomePage extends Component {
	render() {
		return (
			<div>
			 	{/* <span className="centerScreen title">World Dairy Expo</span> */}
				<Header as='h1' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
			  <Container text className='rules'>
			    <Header as='h3'>How to Play:</Header>
					<p>1. Click on cows</p>
					<p>2. Do not click on non-cows</p>
			  </Container>
			 	<img src={cowImage} className='cowImage' alt='cow' />
			</div>
		)
	}
}
