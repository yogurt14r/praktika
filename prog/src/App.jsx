import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <BrowserRouter>
          <Header />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
