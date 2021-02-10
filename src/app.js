import React from 'react'

export default function App() {
  function test() {
    console.error('test onclick');
  }

  return (<div onClick={test}>app</div>)
}
