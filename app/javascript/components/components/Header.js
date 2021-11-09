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
        <ul style={{color:"lightblue"}}>
            ★¸.•☆•.¸★ 🄲🄰🅂🄷  🄽  🄲🄾🄼🄵🄾🅁🅃 ★⡀.•☆•.★
        </ul>
        <NavLink to="/">Home</NavLink>
        <div>
            <ul>
                {!logged_in &&
                <>
                <NavLink to="/aptindex" className="nav-link">Vacant Apartments</NavLink>
                <a href={sign_in_route} className="nav-link">Sign In</a>
                <a href={new_user_route} className="nav-link">Create Account</a>
                </>
                }
                {logged_in &&
                <>
                <a href={sign_out_route} className="nav-link">Sign Out</a>    
                <NavLink to="/aptindex" className="nav-link">Vacancies</NavLink>
                <NavLink to="/aptnew" className="nav-link">Add an Apartment</NavLink>
                <NavLink to="/myapt" className="nav-link">My Apartments</NavLink>
                </>
                }
            </ul>
        </div>
      </header>
    )
  }
}
export default Header