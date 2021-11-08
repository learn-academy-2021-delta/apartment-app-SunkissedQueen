import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/aptmoney.jpeg'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <NavLink to="/">
          <img src={logo} alt="apartment logo" className="logo"/>
        </NavLink>
        <ul style={{color:"lightblue"}}>
            ★¸.•☆•.¸★ 🄲🄰🅂🄷  🄽  🄲🄾🄼🄵🄾🅁🅃 ★⡀.•☆•.★
        </ul>
        <div>
            <ul>
                {logged_in &&
                <a href={sign_out_route} className="nav-link">Sign Out</a>
                }
                {!logged_in &&
                <a href={sign_in_route} className="nav-link">Sign In</a>
                }
            </ul>
        </div>
      </header>
    )
  }
}
export default Header