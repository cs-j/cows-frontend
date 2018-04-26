import React, { Component } from 'react';

const KEY = {
   ENTER: 13
}

export default class InputHandler extends Component {
  constructor() {
    super()

    this.pressedKey = { enter: 0 }
  }

  bindKey() {
    window.addEventListener('keyup', this.handleKey.bind(this, false))
    window.addEventListener('keydown', this.handleKey.bind(this, true))
  }

  unbindKey() {
    window.removeEventListener('keyup', this.handleKey)
    window.removeEventListener('keydown', this.handleKey)
  }

  handleKey(value, e){
     let key = this.pressedKey
     switch (e.keyCode) {
        case KEY.ENTER:
           key.enter = value
           break
      }
      this.pressedKey = key
  }

	render() {
		return (
			<div>
				<span className="centerScreen title">COW ???</span>
				<span className="centerScreen pressSpace">press enter to start the game!</span>
			</div>
		)
	}
}
