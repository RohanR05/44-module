import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Price from './components/Price/Price'
import Results from './components/Results/Results';
import axios from 'axios';
import Mark from './components/mark/Mark';

const pricePromise = fetch('Price.json').then(res => res.json());
const markPromise = axios.get('mark.json')

function App() {

  return (
    <>
    <header className='bg-gray-400'>
      <Navbar></Navbar>
    </header>
    <main className='bg-gray-300 py-16'>
      <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
        <Price pricePromise={pricePromise}></Price>
      </Suspense>
    </main>
    <Results></Results>
    </>
  )
}

export default App
