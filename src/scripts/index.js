require("../styles/base.scss");

function component () {
  var element = document.createElement('div');

  element.innerHTML = "Hello, World!";

  return element;
}

document.body.appendChild(component());



import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createDebounce from 'redux-debounced'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import persistState from 'redux-localstorage'

import rootReducer from './reducers'
import { fetchSession } from './actions'
import AppContainer from './containers/AppContainer'


injectTapEventPlugin();

const loggerMiddleware = createLogger();
const debouncer = createDebounce();

const createPersistantStore = compose(
  persistState("user")
)(createStore);

const store = createPersistantStore(
  rootReducer,
  applyMiddleware(
    debouncer,
    thunkMiddleware
    //,loggerMiddleware
  )
);

// fill-in from logged-in user
store.dispatch(fetchSession())

render(
  <Provider store={store}>
    <AppContainer history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
