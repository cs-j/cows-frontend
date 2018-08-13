import React, { Component } from 'react';
import '../App.css';
import cowImage from '../images/cow_head.png';
import globe from '../images/globe.png';
import { Container, Header } from 'semantic-ui-react';

export default class WelcomePage extends Component {
	render() {
		return (
			<div>
				<Header as='h1' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
			  <Container text className='rules'>
			    <Header as='h3'>How to Play:</Header>
					<p>1. click on cows</p>
					<p>2. do not click on things<br/>that aren't cows</p>
			  </Container>
			 	<img src={cowImage} className='cowImage' alt='cow' />
			</div>
		)
	}
}
