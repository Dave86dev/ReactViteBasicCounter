import { useState } from 'react'
import './App.css'
import { Center } from './common/Center/Center'
import { Footer } from './common/Footer/Footer'
import { Header } from './common/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Center />
      <Footer />
    </div>
  
  )
}

export default App
