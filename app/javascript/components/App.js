import React from "react"

class App extends React.Component {
  render () {
      console.log("logged in:", this.props.logged_in)
    return (
      <>
      <h1>Hello, World!!!</h1>
      </>
    );
  }
}

export default App
