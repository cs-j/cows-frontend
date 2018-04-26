import React, { Component } from 'react';
import './App.css';
// import Canvas from './components/Canvas'
import WelcomePage from './components/WelcomePage';
import InputHandler from './components/InputHandler';
import Cow from './components/Cow';

const Width = 800
const Height = window.innerHeight
const Ratio = window.devicePixelRatio || 1
const GameState = {
   StartScreen : 0,
   Playing : 1,
   GameOver : 2
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      input: new InputHandler(),
      screen: {
          width: Width,
          height: Height,
          ratio: Ratio
      },
      gameState: GameState.StartScreen
    }
  }

  componentDidMount() {
    this.state.input.bindKey()
    requestAnimationFrame(() => {this.update()})
  }

  startGame() {
    this.setState({
      gameState: GameState.Playing
    })
  }

  update(currentScreen) {
    const key = this.state.input.pressedKey;
    if (this.state.gameState === GameState.StartScreen && key.enter) {
      this.startGame()
    }
    requestAnimationFrame(() => {this.update()})
  }

  componentWillUnmount() {
    this.state.input.unbindKey()
  }

  render() {
    return (
      <div className="App">
        {/* <Canvas /> */}
        { this.state.gameState === GameState.StartScreen && <WelcomePage /> }
        { this.state.gameState === GameState.Playing && <Cow /> }
        <canvas id="canvas"
                width={ this.state.screen.width * this.state.screen.ratio }
                height={ this.state.screen.height * this.state.screen.ratio } />
      </div>
    );
  }
}
