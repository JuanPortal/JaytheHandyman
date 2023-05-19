import React from 'react'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Links = ({setHamburgerVisibility, setHamburgerIcon}) => {
  {
    const linkList = document.querySelectorAll('.route')
    linkList.forEach(link => {
      link.addEventListener('click', () => {
        setHamburgerVisibility('invisible')
        setHamburgerIcon(faBars)
      })
    })
  }

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
