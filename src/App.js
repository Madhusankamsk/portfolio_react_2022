import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Summery from './components/Summery/Summery'

const App = () => {
  return (
    <>
      <div className='container' >
        <Navigation/>
        <Home/>
        <Summery/>
      </div>
    </>
  )
}

export default App