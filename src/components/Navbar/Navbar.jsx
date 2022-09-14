import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-secondary navbar-expand-sm'>
          <div className="container ml-4">
            <Link to={"/"} className="navbar-brand display-5"> 
            <img src='https://static.thenounproject.com/png/432199-200.png' alt="logo"
            width={60} height={70}/> Fund <span className='text-warning'>Raisers</span> 
            </Link>
            <ul className='pages-list'>
                <Link to={"/"}>
                  <a className='plist'><i className='fa fa-home mr-4'>Home</i></a>
                </Link>
                <Link to={"/register"}>
                  <a className='plist mr-4'>Sign Up</a>
                </Link>
                <Link to={"/login"}>
                  <a className='plist mr-4'>Login</a>
                </Link>
                <Link to={"/contactus"}>
                  <a className='plist mr-4'><i className='fa fa-phone'>Contact Us</i></a>
                </Link>
                <Link to={"/admin"}>
                  <a className='plist mr-1'>Admin</a>
                </Link>
            </ul>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;