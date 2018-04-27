import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Cow from './components/Cow';
import { startGame } from './actions';

class App extends Component {

  //
  // componentDidMount() {
  //   this.state.key.bindKey()
  //   requestAnimationFrame(() => {this.update()})
  // }
  //
  // startGame() {
  //   this.setState({
  //     gameState: GameState.Playing
  //   })
  // }
  //
  // update(currentScreen) {
  //   // const key = this.state.input.pressedKey;
  //   if (this.state.gameState === GameState.StartScreen && key.enter) {
  //     this.startGame()
  //   }
  //   requestAnimationFrame(() => {this.update()})
  // }
  //
  // bindKey() {
  //   window.addEventListener('keyup', this.handleKey.bind(this, false))
  //   window.addEventListener('keydown', this.handleKey.bind(this, true))
  // }
  //
  // unbindKey() {
  //   window.removeEventListener('keyup', this.handleKey)
  //   window.removeEventListener('keydown', this.handleKey)
  // }
  //
  // handleKey(value, e) {
  //    let key = 0
  //    switch (e.keyCode) {
  //       case e.keyCode === 13:
  //          key.enter = value
  //          break
  //     }
  //     // this.pressedKey = key
  // }
  //
  // componentWillUnmount() {
  //   this.state.key.unbindKey()
  // }

  // theOnClickHandler() {
  //   // initiate the action to start_game
  //   startGame()
  // }
  handleOnClick() {
    // this.props.dispatch({
    //   type: 'START_GAME',
    // })
    this.props.store.dispatch(startGame())
    // debugger
  }


  render() {
    console.log(this.props.store.getState())
    return (
      <div className="App">
        {/* <Canvas /> */}
        { this.props.store.getState().gameStarted === false && <WelcomePage /> }
        { this.props.store.getState().gameStarted === true && <Cow /> }
        <button onClick={() => this.handleOnClick()}>
          Start Game
        </button>

        <canvas id="canvas"
               width={ this.props.store.getState().screen.width * this.props.store.getState().screen.ratio }
               height={ this.props.store.getState().screen.height * this.props.store.getState().screen.ratio } />
        {/* {this.props.store.getState().gameStarted === false ? <canvas id="canvas"
               width={ this.state.screen.width * this.state.screen.ratio }
               height={ this.state.screen.height * this.state.screen.ratio } /> : null } */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted
  }
}

// export default connect(mapStateToProps, actions)(App);
export default connect(mapStateToProps, startGame)(App);
