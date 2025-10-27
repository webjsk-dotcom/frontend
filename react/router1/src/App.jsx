import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navigation from './pages/Navigation'


export default function App() {
  return (
    <div className='App'>
      <Navigation/>
      <main>
        {/* <Home />
        <About />
        <Contact /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  )
}
