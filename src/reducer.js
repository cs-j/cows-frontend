const Width = 800
const Height = window.innerHeight
const Ratio = window.devicePixelRatio || 1

const defaultState = {
  screen: {
      width: Width,
      height: Height,
      ratio: Ratio
  },
  gameStarted: false,
  cow: {
    clicked: false
  }
}

export function rootReducer(state = defaultState, action){
  switch(action.type) {
    case 'START_GAME':
      return {...state,
        gameStarted: true
      }
    default:
      return state
  }
}
