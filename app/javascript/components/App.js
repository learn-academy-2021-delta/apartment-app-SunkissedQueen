import React from "react"

class App extends React.Component {
  render () {
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
      <h2>If you have currency, we have vacancy.</h2>
        { logged_in &&
          <div>
            <a href={sign_out_route }>Log Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Log In</a>
          </div>
        }
      </>
    )
  }
}


export default App
