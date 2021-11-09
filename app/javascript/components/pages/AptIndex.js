import React, { Component } from 'react'
import apt from '../assets/header.jpg'
import apt1 from '../assets/aptkeys.jpeg'
import apt2 from '../assets/kitchen.jpeg'
import apt3 from '../assets/aptmoney.jpeg'
import { NavLink } from 'react-router-dom'

class AptIndex extends Component{
  render(){
    return(
        <>
        <h1>Places you can live with the money you give</h1>
            <NavLink to="/">
                Home
            </NavLink>
            <div class="board">
                <table>
                    <tr>
                        <td>
                            <img src={apt3} alt="cozy bedroom with plants" style={{height:"100px"}} />
                        </td>
                        <td>
                            <img src={apt3} alt="cozy bedroom with plants" style={{height:"100px"}} />
                        </td>
                        <td>
                            <img src={apt3} alt="cozy bedroom with plants" style={{height:"100px"}} />
                        </td>
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
                </table>
            </div>
            <h2>I'm baby raw denim DIY blog trust fund wolf live-edge, blue bottle hot chicken whatever four dollar toast chia copper mug VHS roof party. Truffaut cred mixtape gochujang freegan trust fund unicorn vexillologist succulents man bun lyft leggings adaptogen sartorial. Tumblr bitters tumeric blue bottle palo santo four loko brooklyn green juice stumptown williamsburg subway tile helvetica before they sold out aesthetic. Jean shorts VHS austin williamsburg, banjo affogato YOLO copper mug.

D           ummy text? More like dummy thicc text, amirite?</h2>
      </>
    )
  }
}

export default AptIndex