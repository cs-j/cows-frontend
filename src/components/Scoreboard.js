import React, { Component } from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image, Modal, Header, Button, Icon } from 'semantic-ui-react';
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
          // alert("Time's up! Play again?");
          <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
            <Header icon='hourglass end' content="Time's up!" />
            <Modal.Content>
              <p>Play again?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
          clearInterval();
          document.location.reload();
        }
      } , 1000)
  }


  // <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
  //   <Header icon='hourglass end' content="Time's up!" />
  //   <Modal.Content>
  //     <p>Play again?</p>
  //   </Modal.Content>
  //   <Modal.Actions>
  //     <Button color='green' inverted>
  //       <Icon name='checkmark' /> Yes
  //     </Button>
  //   </Modal.Actions>
  // </Modal>


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
