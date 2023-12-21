import React from 'react'
import './NavItem.css'

const NavItem = (props) => {
  return (
    <div>
        <li className='nav-item'>
            <a href={props.link}>{props.children}</a>
        </li>
    </div>
  )
}

export default NavItem