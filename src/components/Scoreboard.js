import React, { Component } from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image } from 'semantic-ui-react';
import cow from '../images/cow_trophy.png';
let secondsLeft = 10;

export default class Scoreboard extends Component {

  state = {
    score: GameScreen(this.setState.bind(this)).score
    // secondsLeft: 60
  }

  interval = () => { setInterval(function() {
      secondsLeft = --secondsLeft;
    if (secondsLeft <= 0)
      {
        // document.getElementById('timer').innerHTML = "Time's Up!";
        clearInterval();
      }
  }, 1000)
}



  render() {
    // console.log("inside scoreboard");
    // console.log("score is", this.state.score);
    return (
      <Statistic.Group floated='right'>
        <Statistic id='score'>
          <Statistic.Value>
            <Image src={cow} inline />
            {this.state.score}
          </Statistic.Value>
          <Statistic.Label>Current Score</Statistic.Label>
        </Statistic>
        <Statistic id='timer' label='Seconds Left' value={secondsLeft} />
      </Statistic.Group>
    )
  }
}
