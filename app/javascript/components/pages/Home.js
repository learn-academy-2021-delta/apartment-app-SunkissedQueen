import React, { Component } from 'react'
import apt from '../assets/header.jpg'
import apt1 from '../assets/aptkeys.jpeg'
import apt2 from '../assets/kitchen.jpeg'

class Home extends Component {
    render() {
        return (
            <>
            <div class="board">
                <table>
                    <tr>
                    <td>If</td>
                    <td>there's</td>
                    <td>currency</td>
                    </tr>
                    <tr>
                    <td>
                        <img src={apt} alt="cozy bedroom with plants" style={{height:"100px"}} />
                    </td>
                    <td>
                        <img src={apt1} alt="apt keychain" style={{height:"100px"}} />
                    </td>
                    <td>
                        <img src={apt2} alt="kitchen" style={{height:"100px"}} />
                    </td>
                    </tr>
                    <tr>
                    <td>There</td>
                    <td>is</td>
                    <td>vacancy</td>
                    </tr>
                </table>
            </div>
        </>
      )
    }
  }
  
  export default Home