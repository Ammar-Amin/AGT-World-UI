import './App.css'
import Header from './components/Header'
import LandingIMG from './components/LandingIMG'
import Body from './components/Body'
import { useState } from 'react'
import Account from './components/Account'

function App() {

  const [bgDark, setBgDark] = useState(false)

  return (
    <>
      <div className={
        bgDark ? 'visible fixed w-full h-screen z-50 bg-black/40'
          : 'hidden'
      }>
        <Account bgDark={bgDark} setBgDark={setBgDark} />
      </div>

      <Header bgDark={bgDark} setBgDark={setBgDark} />
      <LandingIMG />
      <Body />
    </>
  )
}

export default App
