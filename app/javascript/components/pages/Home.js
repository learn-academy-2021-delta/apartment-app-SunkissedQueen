import React, { Component } from 'react'
import apt from '../assets/header.jpg'

class Home extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        return (
            <>
            ★¸.•☆•.¸★ 🄲🄰🅂🄷  🄽  🄲🄾🄼🄵🄾🅁🅃 ★⡀.•☆•.★
            <br/>
            <img src={apt} alt="cozy bedroom with plants" style={{height:"200px"}} />
            <h2>If you have currency, we have vacancy.</h2>
            { logged_in &&
                <div>
                <a href={sign_out_route }>Sign Out</a>
                </div>
            }
            { !logged_in &&
                <div>
                <a href={ sign_in_route }>Sign In</a>
                </div>
            }
        </>
      )
    }
  }
  
  export default Home