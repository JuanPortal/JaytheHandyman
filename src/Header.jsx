import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Links } from './Links'
import logoImg from '../public/assets/logo.png'

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
        <img src={logoImg} alt="Jay the Handyman's logo" title="Jay the Handyman's logo" />
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
