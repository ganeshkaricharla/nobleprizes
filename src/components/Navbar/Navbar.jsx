import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-brand'>
        <h1 className='navbar-brand-name'>The Nobelists</h1>
      </div>

      <div className='navbar-creator'>
        <span className='navbar-creator-name'>Sumanth</span>
        <ul className='navbar-social-link'>
          <li className='navbar-social-link-item'>
            <a href='#'>
              <i className='navbar-icons fa-brands fa-facebook'></i>
            </a>
          </li>
          <li className='navbar-social-link-item'>
            <a href='#'>
              <i className='navbar-icons fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li className='navbar-social-link-item'>
            <a href='#'>
              <i className='navbar-icons fa-brands fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
