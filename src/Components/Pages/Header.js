import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" exact>Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact  className="nav-link" aria-current="page" to="/react-crud" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/contact" >Contact</NavLink>
        </li>
      </ul>

      
    </div>
   <Link to ="/user/add"><button className="btn btn-primary btn-outline-light me-5">Add User</button></Link> 
  </div>

  
</nav>
            
        </div>
    )
}

export default Header
