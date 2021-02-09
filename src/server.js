import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './app'

module.exports = function render(initialState) {
  let initState = {};
  let content = renderToString(
    <>
       <App />
    </>
  );

  return {content, initState};
}
