import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ApartmentIndex from '../pages/ApartmentIndex'


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
          <NavLink to="/">
            ☆•.⡀★ 🄲🄰🅂🄷  🄽  🄲🄾🄼🄵🄾🅁🅃 ★⡀.•☆
          </NavLink>
        </ul>
        <div>
            <ul>
                {!logged_in &&
                <>
                <NavLink to="/apartmentindex" className="nav-link">Vacancies</NavLink>
                <a href={sign_in_route} className="nav-link">Sign In</a>
                <a href={new_user_route} className="nav-link">Create Account</a>
                </>
                }
                {logged_in &&
                <>
                <a href={sign_out_route} className="nav-link">Sign Out</a>    
                <NavLink to="/apartmentindex" className="nav-link">Vacancies</NavLink>
                <NavLink to="/apartmentnew" className="nav-link">Add Apartment</NavLink>
                <NavLink to="/myapartments" className="nav-link">My Apartments</NavLink>
                </>
                }
            </ul>
        </div>
      </header>
    )
  }
}
export default Header