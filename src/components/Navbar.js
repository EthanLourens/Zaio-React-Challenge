import React from 'react';

const Navbar = () => {
  return (
    <nav >
      <div className="navbar">
        <ul className="nav">
          <li><a href="/login">Login</a></li>
          <li><a href='/register'>Register</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar