import { useState } from 'react'
import './App.css'
import {Footer,Blog,Features,Header,Possibility,WhatGPT3} from './containers'; 
import {CTA,Brand,Navbar} from './Components'
function App() 
{
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className='gradient__bg'>
      <Navbar/>
      <Header />
      </div>
      <div className='gradient__bg'>
      <Brand/>
      <WhatGPT3/>
      </div>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
