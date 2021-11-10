import React, { Component } from 'react'
import apt from '../assets/header.jpg'
import apt1 from '../assets/aptkeys.jpeg'
import apt2 from '../assets/kitchen.jpeg'
import apt3 from '../assets/aptmoney.jpeg'
import { NavLink } from 'react-router-dom'
import { faHome, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import pics from './pics.js'

class ApartmentIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics: pics
    }
  } 
  render() {
    const { apartments } = this.props
    return (
      <>
        <h1>Oh the places you can live with the money you give</h1>
        <div className="index-cards">
        
          {apartments && apartments.map(apartment => {
            return (
              <Row key={apartment.id} className="card">
                <Col sm="6">
                  <Card className="card" body>
                    <CardTitle tag="h5">Would you like to the   keys to {apartment.street}, {apartment.city}, {apartment.state}?
                    </CardTitle>
                    <h2>{ pics.map(obj => (<img key={obj.id} src={obj.src} alt={obj.alt}/>))}</h2>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
                </Card>
                </Col>
              </Row>
            )
          })}
      </div>
      </>
    )
  }
}
export default ApartmentIndex