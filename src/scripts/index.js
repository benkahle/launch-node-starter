import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createDebounce from 'redux-debounced'
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'

import rootReducer from './reducers'
import App from './components/App'

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

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
