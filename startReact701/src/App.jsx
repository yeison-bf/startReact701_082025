import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clients } from './feature/clients/clients'

function App() {
  return (
    <>
    <div className='container p-5'>
     <Clients/>
    </div>
    </>
  )
}

export default App
