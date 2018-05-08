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
  isLoggedIn: false
}

export function rootReducer(state = defaultState, action){
  switch(action.type) {
    case 'START_GAME':
      return {...state,
        gameStarted: true
      }
    // case 'LOG_IN':
    // return {...state,
    //   isLoggedIn: true
    // }
    default:
      return state
  }
}
