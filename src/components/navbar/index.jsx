import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.svg'

export default function Navbar() {
  return (
      <div className="navbar">
           <div className="logo">
               <a href="#">
      <img src={logo} alt="Company logo" />
             </a>
         </div>
         <nav>
             <ul>
                 <li><a href="#">Headphones</a></li>
                 <li><a href="#">Speakers </a></li>
                 <li><a href="#">Backstage</a></li>
                 <li><a href="#">Studio</a></li>
                 <li><a href="#">Accessories</a></li>
             </ul>
             <div className='login-button'>
                 <a href="#">Login</a>
             </div>
         </nav>
     </div>
  )
}
