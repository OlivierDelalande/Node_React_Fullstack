import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// first argument correspond to all reducers we got in the application
// second is the initial state of application
// third is the middlewares we use in the app

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
// Provider is the component that allows all the app's components to get access to redux 
// store states
// first argument of render is what we're going to render
// second argument of render is where it is going to be rendered
