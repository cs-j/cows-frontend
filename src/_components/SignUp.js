import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/userActions';
import { Input, Button } from 'semantic-ui-react';

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.register(this.state)
    this.setState({
      username: "",
      password: "",
      password_confirmation: "",
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
        <Input
          placeholder="Password Confirmation"
          value={this.state.password_confirmation}
          name="password_confirmation"
          type="password"
          onChange={this.handleChange}
        />
        <Button
          label="Sign Up"
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signUp: signUp,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)


// import React, {Component} from 'react';
// import globe from '../images/globe.png';
// import { Header } from 'semantic-ui-react';
// import { connect } from 'react-redux';
//
// class SignUp extends Component {
//   render(){
//     return(
//       <div>
//         <Header as='h1' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
//         <a href="http://cjacks.net/world-dairy-expo/login"><button className="sign-up-button">Sign Up</button></a>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {user: state.user}
// }
//
// export default connect(mapStateToProps)(SignUp)
