import React from 'react'

export default function AppFrame(props) {
  return (
    <div className='AppFrame'>
      <nav className='Navbar'>
        <p className='NavbarLogo'>gitsee</p>
      </nav>
      {props.children}
    </div>
  )
}
