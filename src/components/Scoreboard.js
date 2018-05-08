import React from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image } from 'semantic-ui-react';
import cow from '../images/cow_trophy.png';
let secondsLeft = 10;

export default function Scoreboard() {

  const interval = setInterval(function() {
      secondsLeft = --secondsLeft;
      console.log(secondsLeft, 'seconds left')
    if (secondsLeft <= 0)
      {
        // document.getElementById('timer').innerHTML = "Time's Up!";
        clearInterval(interval);
      }
  }, 1000);

	return (
    <Statistic.Group floated='right'>
      {/* <Statistic id='score' label='Current Score' value={GameScreen().score} /> */}
      <Statistic id='score'>
        <Statistic.Value>
          <Image src={cow} inline />
          {GameScreen().score}
        </Statistic.Value>
        <Statistic.Label>Current Score</Statistic.Label>
      </Statistic>
      <Statistic id='timer' label='Seconds Left' value={secondsLeft} />
    </Statistic.Group>
	)
}
