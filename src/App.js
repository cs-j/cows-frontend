import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { startGame } from './actions';
import { Button } from 'semantic-ui-react';
import GameScreen from './components/GameScreen';

class App extends Component {

  handleStartButton() {
    this.props.store.dispatch(startGame())
  }

  render() {
    // console.log(this.props.store.getState())
    // console.log(GameScreen().bodies)
    return (
      <div className="App">
        {this.props.store.getState().gameStarted === false ? <canvas id="canvas"
          width={ this.props.store.getState().screen.width * this.props.store.getState().screen.ratio }
          height={ this.props.store.getState().screen.height * this.props.store.getState().screen.ratio } /> : null }

        { this.props.store.getState().gameStarted === false && <div>
          <WelcomePage />
          <Button color='black' size='large' className='startButton' onClick={() => this.handleStartButton()}>
            Start Game
          </Button>
        </div> }
        { this.props.store.getState().gameStarted === true && GameScreen() }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted
  }
}

export default connect(mapStateToProps, startGame)(App);
