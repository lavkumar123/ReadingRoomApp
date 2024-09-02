import React from 'react'
import Home from './home/Home'

import { Route, Routes } from"react-router-dom"
import Premiums from './Premiums/Premiums'
import Singnup from './components/Singnup'
import Contact from './components/Contact'

function App() {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/premium' element={<Premiums/>}/>
    <Route path='/signup' element={<Singnup/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App