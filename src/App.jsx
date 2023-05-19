import React from 'react'
import { Header } from './Header'
import { Home } from './Home'
import { About } from './About'
import { Pricing } from './Pricing'
import { Gallery } from './Gallery'
import { Contact } from './Contact'

import { Routes, Route } from 'react-router-dom'


export const App = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  )
}
