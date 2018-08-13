// const Width = 800
// const Height = window.innerHeight
// const Ratio = window.devicePixelRatio || 1
//
// const defaultState = {
//   screen: {
//       width: Width,
//       height: Height,
//       ratio: Ratio
//   },
//   gameStarted: false,
//   // isLoggedIn: false,
//   loading: false,
//   currentUser: []
// }
//
// export function gameReducer(state = defaultState, action){
//   switch(action.type) {
//     case 'START_GAME':
//       return {...state,
//         gameStarted: true
//       }
//
//     case 'START_FETCHING_USER':
//       return{
//         ...state,
//         loading: true
//       }
//
//     case 'ADD_USER':
//       return{
//         ...state,
//         loading: false,
//         currentUser: action.payload
//       }
//
//     default:
//       return state
//   }
// }
