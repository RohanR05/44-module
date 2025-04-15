import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Price from './components/Price/Price'

const pricePromise = fetch('Price.json').then(res => res.json());

function App() {

  return (
    <>
    <header className='bg-gray-400'>
      <Navbar></Navbar>
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
        <Price pricePromise={pricePromise}></Price>
      </Suspense>
    </main>
    </>
  )
}

export default App
