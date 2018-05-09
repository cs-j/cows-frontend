import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
// import Login from './components/Login';
// import Logout from './components/Logout';
import { startGame } from './actions';
import { Button, Header } from 'semantic-ui-react';
import globe from './images/globe.png';
import Scoreboard from './components/Scoreboard';
import Navbar from './components/Navbar';

class App extends Component {

  handleStartButton() {
    this.props.store.dispatch(startGame())
  }

  render() {
    return (
      <div className="App">

        { this.props.store.getState().gameStarted === false && <div>
          <WelcomePage />
          <Button color='black' onClick={() => this.handleStartButton()}>
            START
          </Button>
        </div> }
        { this.props.store.getState().gameStarted === true && <div>
          <Header as='h2' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
          <Scoreboard />
          { Navbar() }
        </div> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted,
  }
}

export default connect(mapStateToProps, startGame)(App);
