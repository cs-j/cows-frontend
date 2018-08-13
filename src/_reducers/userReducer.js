// const initialState = {
//   loggedIn: false,
//   user_id: null,
//   view: null
// }
//
// export const userReducer = (state = initialState, {type, payload}) => {
//   switch(type) {
//     case "REMEMBER_USER":
//       return {...state, loggedIn: true, user_id: payload}
//     case "RENDER_LOGIN_FORM":
//       return {...state, view: null}
//     case "LOGIN_SUCCEEDED":
//       return {...state, loggedIn: true, user_id: payload, view: null}
//     case "LOGIN_FAILED":
//       return {...state, errors: payload}
//     case "LOGOUT_USER":
//       return initialState
//     case "RENDER_SIGNUP_FORM":
//       return {...state, view: "signUp"}
//     case "SIGNUP_SUCCEEDED":
//       return {...state, loggedIn: true, user_id: payload.id, view: null}
//     case "SIGNUP_FAILED":
//       return {...state, errors: payload}
//
//     default:
//       return state
//   }
// }
