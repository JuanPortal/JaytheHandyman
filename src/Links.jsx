import React from 'react'
import { Link } from 'react-router-dom'

export const Links = () => {
  return (
    <>
        <Link className='route' to='/'>Home</Link>
        <Link className='route' to='/about'>About us</Link>
        <Link className='route' to='/pricing'>Services & Pricing</Link>
        <Link className='route' to='/gallery'>Our work & Gallery</Link>
        <Link className='route' to='/contact'>Contact us</Link>
    </>
  )
}
