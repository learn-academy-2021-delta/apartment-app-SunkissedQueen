import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import {
  BrowserRouter as  Router,
  Routes,
  Route
} from 'react-router-dom'

class App extends Component {
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
        <Router>
          <Header {...this.props}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App
