import React from 'react'
import logo from '../Troll Face.png'

export default function Header() {
  return (
    <header className="header">
            <img
                src={logo} 
                className="header--image" 
                alt="logo" 
            />
          <h2 className='header--title'>Meme Generator</h2>
          <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  )
}
