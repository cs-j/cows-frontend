import React, { Component } from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image } from 'semantic-ui-react';
import cow from '../images/cow_trophy.png';
let secondsLeft = 1000;

export default class Scoreboard extends Component {

  state = {
    score: GameScreen(this.setState.bind(this)).score,
    secondsLeft: 1000
  }

//   interval = () => { setInterval(function() {
//     secondsLeft = --secondsLeft;
//     console.log("inside interval", secondsLeft);
//     if (secondsLeft <= 0)
//     {
//       // document.getElementById('timer').innerHTML = "Time's Up!";
//       clearInterval();
//     }
//   }, 1000)
// }


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
    // console.log("inside scoreboard");
    // console.log("score is", this.state.score);
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
