import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavTop.css"

export default function NavTop(props) {
  const numOfCard = props.numOfCard;
  return (
      <div className='NavTop'>
          <div className="logo">
              <a href="/">SULEIMAN SHOP</a>
          </div>
          <ul className="listNav">
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/card"><span>{numOfCard}</span><ShoppingCartIcon /></NavLink>
              </li>
          </ul>
    </div>
  )
}
