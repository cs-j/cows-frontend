import React, { Component } from 'react';
import GameScreen from './GameScreen';
import '../App.css';
import { Statistic, Image, Modal, Header, Button, Icon } from 'semantic-ui-react';
import cow from '../images/cow_trophy.png';

export default class Scoreboard extends Component {

  state = {
    score: GameScreen(this.setState.bind(this)).score,
    secondsLeft: 5,
    timeUp: false
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({secondsLeft: --this.state.secondsLeft})

        if (this.state.secondsLeft <= 0) {
          // alert(
          //   `TIME'S UP!
          //   Your final score was ${this.state.score}.
          //   Play again?`);
          console.log('timeUp before 26 is', this.state.timeUp)
          this.setState({timeUp: true})
          clearInterval();
          // document.location.reload();
        }
      } , 1000)
  }

  handleOpen() {
    this.setState({ timeUp: true })
  }
  // handleModalClick() {
  //   document.location.reload();
  // }

  handleClose() {
    document.location.reload()
  }

  render() {
    return (
      <div>
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
         { this.state.timeUp === true ? <Modal open={this.state.timeUp === true} onClose={this.handleClose()} basic size='small'>
           <Header icon='hourglass end' content="Time's up!" />
           <Modal.Content>
             <p>Play again?</p>
           </Modal.Content>
           <Modal.Actions>
             <Button color='green' inverted>
               <Icon name='checkmark' /> Yes
             </Button>
           </Modal.Actions>
         </Modal> : null }
       </div>
    )
  }
}
