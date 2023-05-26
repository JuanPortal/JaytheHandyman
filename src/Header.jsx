import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Links } from './Links'
import logoImg from '../assets/logo.png'

export const Header = () => {
  const [hamburgerVisibility, setHamburgerVisibility] = useState('invisible')
  const [hamburgerIcon, setHamburgerIcon] = useState(faBars)
  const handleHamburgerIcon = () => {
    if (hamburgerIcon === faBars) {
      setHamburgerIcon(faXmark)
      setHamburgerVisibility('visible')
    } else {
      setHamburgerIcon(faBars)
      setHamburgerVisibility('invisible')
    }
  }

  return (
    <>
    <header>
      <h1>Jay the Handyman</h1>
      <Link className='logo' to='/'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jay-the-handyman.appspot.com/o/logo.webp?alt=media&token=04c111fa-be3e-4442-b3cb-b9f6c778cfe2" alt="Jay the Handyman's logo" title="Jay the Handyman's logo" />
      </Link>
      <div className="tabs">
        <Links />
      </div>
      <div className="hamburger-menu" onClick={handleHamburgerIcon}>
        <FontAwesomeIcon icon={hamburgerIcon} />
      </div>
    </header>
    <div className={`hamburger-menu-links ${hamburgerVisibility}`}>
      <Links 
        setHamburgerVisibility={setHamburgerVisibility}
        setHamburgerIcon={setHamburgerIcon}
      />
    </div>
    </>
  )
}
