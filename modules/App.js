import React from 'react'

import NavLink from './NavLink'
import Home from './Home'

export default ({ children }) => (
  <div>
    <h1>React Router Tutorial</h1>
    <nav>
      <ul>
        <li><NavLink to='/' onlyActiveOnIndex>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/repos'>Repos</NavLink></li>
      </ul>
    </nav>

    { children || <Home/> }
  </div>
);
