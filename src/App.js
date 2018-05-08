import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
// import Login from './components/Login';
// import Logout from './components/Logout';
import { startGame } from './actions';
import { Button } from 'semantic-ui-react';
// import GameScreen from './components/GameScreen';
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
            Start Game
          </Button>
        </div> }
        { this.props.store.getState().gameStarted === true && <div>
          {/* { GameScreen() } */}
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
