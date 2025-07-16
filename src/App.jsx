import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Service from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar />
      <Main />
      <About/>
      <Service />
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
