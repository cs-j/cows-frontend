import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { Logo } from './Logo.jsx';
import { RegisterPage } from './RegisterPage.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={Logo} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
// export default App;



// class App extends Component {
//
//   handleStartButton() {
//     this.props.store.dispatch(startGame())
//   }
//
//   render() {
//     return (
//       <div className="App">
//
//         { this.props.store.getState().gameStarted === false && <div>
//           <WelcomePage />
//           <Button color='black' onClick={() => this.handleStartButton()}>
//             START
//           </Button>
//         </div> }
//         { this.props.store.getState().gameStarted === true && <div>
//           <Header as='h2' className='title'>W<img src={globe} alt='globe as the o in the word world' />rld Dairy Expo</Header>
//           <Scoreboard />
//         </div> }
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     gameStarted: state.gameStarted,
//   }
// }
//
// export default connect(mapStateToProps, startGame)(App);
