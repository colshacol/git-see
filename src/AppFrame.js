import React from 'react'

export default function(props) {
  return (
    <div className='AppFrame'>
      <nav>NAVBAR</nav>
      {props.children}
    </div>
  )
}
