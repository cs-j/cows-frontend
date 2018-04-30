import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { startGame } from './actions';
import { Button } from 'semantic-ui-react';
import GameScreen from './components/GameScreen';


class App extends Component {

  handleOnClick() {
    this.props.store.dispatch(startGame())
  }

  renderGame(game) {
    return game
  }

  render() {
    console.log(this.props.store.getState())
    return (
      <div className="App">

        { this.props.store.getState().gameStarted === false && <div>
          <WelcomePage />
          <Button color='black' size='large' className='startButton' onClick={() => this.handleOnClick()}>
            Start Game
          </Button>
        </div> }
        { this.props.store.getState().gameStarted === true && this.renderGame(<GameScreen />) }

        {this.props.store.getState().gameStarted === false ? <canvas id="canvas"
               width={ this.props.store.getState().screen.width * this.props.store.getState().screen.ratio }
               height={ this.props.store.getState().screen.height * this.props.store.getState().screen.ratio } /> : null }
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
