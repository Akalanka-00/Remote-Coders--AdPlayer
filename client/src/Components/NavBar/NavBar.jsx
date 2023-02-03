import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">For Game Developer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">For Customer </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
