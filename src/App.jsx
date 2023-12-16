import React, { useState } from 'react'
import './App.css'
import Wishings from './container/wishings/wishings'

function App() {

  return (
    <>
      <React.Fragment>
        <div id='wishings'>
          <Wishings start={new Date().getTime()} />
        </div>
      </React.Fragment>
    </>
  )
}

export default App
