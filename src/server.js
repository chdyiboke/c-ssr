import React from 'react'
import {Provider} from 'react-redux'
import { renderToString } from 'react-dom/server'
import configureStore from './redux/configureStore'
import App from './app'

module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  return {content, preloadedState};
}
