import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Summery from './components/Summery/Summery'
import Languages from './components/Languages/Languages'

const App = () => {
  return (
    <>
      <div className='container' >
        <Navigation/>
        <Home/>
        <Summery/>
        <Languages/>
      </div>
    </>
  )
}

export default App