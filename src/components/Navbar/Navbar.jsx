import React from 'react'
import logo from './../../assets/logobg.png'
import bg from './../../assets/bg1.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar' style={{backgroundImage : `url(${bg})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
      <div className='navbar_logo'>
        <a href='/#home'><img src={logo}></img></a>
      </div>
        <ul className='navbar_links'>
          <li><a href='/#whyupease'>Why Upease</a></li>
          <li><a href='#home'>Solutions</a></li>
          <li><a href='#home'>About Us</a></li>
          <li><a href='#stats'>Stats</a></li>
        </ul>     
    </nav>
  )
}

export default Navbar