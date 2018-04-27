import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Cow from './components/Cow';
import { startGame } from './actions';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch(startGame())
  }

  render() {
    console.log(this.props.store.getState())
    return (
      <div className="App">

        { this.props.store.getState().gameStarted === false && <div>
          <WelcomePage />
          <button className="startButton" onClick={() => this.handleOnClick()}>
            Start Game
          </button>
        </div> }
        { this.props.store.getState().gameStarted === true && <Cow /> }

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

export default connect(mapStateToProps, startGame)(App);
