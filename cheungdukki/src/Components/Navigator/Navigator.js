import React from 'react'
import './Navigator.css'
import {Link} from 'react-router-dom'
// import { useState } from 'react'

export default function Navigator() {
  return (
    
    <div className="Navigator">

      <nav>
        <ul className="nav">
            <li><Link to='/about' className="list">ABOUT</Link></li>
            <li><Link to='/works' className="list">WORKS</Link></li>
            <li><Link to='/contact' className="list">CONTACT</Link></li>
        </ul>
      </nav>
    </div>
   
  )
}