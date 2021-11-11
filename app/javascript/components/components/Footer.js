import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <footer>
          <br/>
        <div style={{fontSize:"12px", color:"lightblue"}}>  
        <NavLink to="/">
            ★ 🄲🄰🅂🄷  🄽  🄲🄾🄼🄵🄾🅁🅃 ★
        </NavLink>
        <br/>
        &copy; <strong>Charlean Baxter 2021</strong> | Syntactical Magician | <a href="https://www.hopbe.org/" target="_blank">Helping Other People be Empowered</a>
        </div>
        <br/>
      </footer>
    )
  }
}
export default Footer 