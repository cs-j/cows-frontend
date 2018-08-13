import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import App from './App';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import { rootReducer } from './reducers/rootReducer';
// import { BrowserRouter as Router } from 'react-router-dom';
// import thunk from 'redux-thunk';
//
// const middleware = applyMiddleware(thunk)
// const store = createStore(rootReducer, compose(middleware))
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root'));
// registerServiceWorker();
