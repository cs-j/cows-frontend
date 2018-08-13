import { API_URL } from '../constants'

export const renderLoginForm = () => {
  return (dispatch) => {
    dispatch({ type: "RENDER_LOGIN_FORM" })
  }
}

export const rememberUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: "REMEMBER_USER",
      payload: userId })
  }
}

export const login = (body) => {
  console.log('body received is', body)
  return (dispatch) => {
    dispatch({ type: "LOGIN_PENDING" })
    return fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        localStorage.user = json._id
        // console.log('localStorage.user is', localStorage.user)
        dispatch({
          type: "LOGIN_SUCCEEDED",
          // payload: json
          payload: localStorage.user
        })
      })
      .catch(err => dispatch({
        type: "LOGIN_FAILED",
        payload: err
      })
    )
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT_USER" })
  }
}

export const renderSignUpForm = () => {
  return (dispatch) => {
    dispatch({ type: "RENDER_SIGNUP_FORM" })
  }
}

export const signUp = (body) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_PENDING" })
    return fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({user: body}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        localStorage.user = json.id
        dispatch({
        type: "SIGNUP_SUCCEEDED",
        payload: json
      })
    })
      .catch(err => dispatch({
        type: "SIGNUP_FAILED",
        payload: err
      }))
  }
}
