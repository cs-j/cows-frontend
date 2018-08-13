import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userId } from '../constants'
import { login, rememberUser } from '../actions/userActions'
import { Input, Button } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    // console.log('localStorage is', localStorage)
    localStorage.user ? this.props.rememberUser(userId) : null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.login(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  handleGuest = (e) => {
    this.props.login({
      username: "admin",
      password: "admin"
    })
  }

  render() {
    return (
      <div className="user-container">
        <Input
          placeholder="Username"
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        />
        <Input
          placeholder="Password"
          value={this.state.password}
          name="password"
          type="password"
          onChange={this.handleChange}
        />
        <Button
          label="Log In"
          onClick={this.handleSubmit}
        />
        {/* <Button
          label="PlayAsGuest"
          onClick={this.handleGuest}
        /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: login,
    rememberUser: rememberUser,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)


// import React, { Component } from 'react';
// import globe from '../images/globe.png';
// import { Header } from 'semantic-ui-react';
// import { fetchUser } from '../actions/actions.js';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// class LogIn extends Component {
//
//   constructor(props){
//     super(props)
//   }
//
//   // state = {
//   //   username: ""
//   // }
//
//   componentDidMount = () => {
//     this.props.fetchUser()
//   }
//
//   handleChange = (e) => {
//     this.setState({
//       [e.target.username]: e.target.value
//     })
//   }
//
//   handleLogIn = (e) => {
//     e.preventDefault()
//
//     this.props.logIn(this.state.name)
//     this.props.history.push("/")
//   }
//
// render(){
//     return(
//       <div>
//         <Header as='h1' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
//
//         <div className="auth-inputs">
//           <input type="text" name="name" placeholder="Enter username" onChange={this.handleChange} className="input-field"></input>
//         </div>
//
//         <button onClick={this.handleLogIn} className="login-button" id="login">Log In</button>
//       </div>
//     )
//   }
// }
//
//
// const mapStateToProps = state => {
//   return {username: state.username}
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     fetchUser
//   }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
