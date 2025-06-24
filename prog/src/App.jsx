import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Catalog from './pages/Catalog'
import Auth from './pages/Auth'
import Cart from './pages/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#FFF8F1]">
        <BrowserRouter>
          <TopBar />
          <Header />
          <main className="">
            <section className='flex'>
							<div className='flex-1'>
								<Routes>
									<Route path='/' element={<Catalog />} />
									<Route path='/auth' element={<Auth />} />
									<Route path='/cart' element={<Cart />} />
								</Routes>
							</div>
						</section>
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
