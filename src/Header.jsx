import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Jay the Handyman</h1>
      <Link className='logo' to='/'>
        <img src="../assets/logo.png" alt="Jay the Handyman's logo" title="Jay the Handyman's logo"/>
      </Link>
      <div class="tabs">
          <Link className='route' to='/'>Home</Link>
          <Link className='route' to='/about'>About us</Link>
          <Link className='route' to='/pricing'>Services & Pricing</Link>
          <Link className='route' to='/gallery'>Our work & Gallery</Link>
          <Link className='route' to='/contact'>Contact us</Link>
      </div>
    </header>
  )
}
