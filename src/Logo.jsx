import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import globe from './images/globe.png';

export default class Logo extends Component {
	render() {
		return (
      <div>
        <Header as='h2' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
      </div>
    )
  }
}
