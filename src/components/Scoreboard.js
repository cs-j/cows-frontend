import React, { Component } from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image } from 'semantic-ui-react';
import cow from '../images/cow_trophy.png';
let secondsLeft = 60;

export default class Scoreboard extends Component {

  state = {
    score: GameScreen(this.setState.bind(this)).score,
    secondsLeft: 60
  }

  componentDidMount() {
    setInterval(() => {
        console.log("state is", this.state);
        this.setState({secondsLeft: --this.state.secondsLeft})
        console.log("inside interval", this.state.secondsLeft);
        if (this.state.secondsLeft <= 0) {
          // TODO stop interval so you don't see -1
          alert("Time's up! Play again?");
          clearInterval();
          document.location.reload();
        }
      } , 1000)

    }


  render() {
    return (
      <Statistic.Group>
        <Statistic id='score'>
          <Statistic.Value>
            <Image src={cow} inline />
            {this.state.score}
          </Statistic.Value>
          <Statistic.Label>Current Score</Statistic.Label>
        </Statistic>
        <Statistic id='timer' label='Seconds Left' value={this.state.secondsLeft} />
      </Statistic.Group>
    )
  }
}
