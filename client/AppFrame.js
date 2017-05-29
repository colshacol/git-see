import React from 'react'
import css from './styles/AppFrame.styl'

export default function AppFrame(props) {
  return (
    <div className={css.AppFrame}>
      <nav className={css.Navbar}>
        <p className={css.NavbarLogo}>gitsee</p>
      </nav>
      {props.children}
    </div>
  )
}
