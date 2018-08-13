// export function startGame() {
//   return {
//     type: 'START_GAME'
//   }
// }

// export function fetchUser() {
//   return (dispatch) => {
//     dispatch({type: 'START_FETCHING_USER'})
//     return fetch('http://localhost:7777/api/users', {
//       headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json',
//       }
//     })
//     .then( res => res.json())
//     .then( json => {
//       dispatch({type: 'ADD_USER', payload: json})
//     })
//   }
// }
