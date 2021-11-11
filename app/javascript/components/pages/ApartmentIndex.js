import React, { Component } from 'react'
import apt1 from '../assets/aptPic/pic1.jpeg'
import apt2 from '../assets/aptPic/pic2.jpeg'
import apt3 from '../assets/aptPic/pic3.jpeg'
import apt4 from '../assets/aptPic/pic4.jpeg'
import apt5 from '../assets/aptPic/pic5.jpeg'
import apt6 from '../assets/aptPic/pic6.jpeg'
import apt7 from '../assets/aptPic/pic7.jpeg'
import apt8 from '../assets/aptPic/pic8.jpeg'
import apt9 from '../assets/aptPic/pic9.jpeg'
import { NavLink } from 'react-router-dom'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardImg, Card, Button, CardTitle, Row, Col } from 'reactstrap'

class ApartmentIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics: [apt1, apt2, apt3, apt4, apt5, apt6, apt7, apt8, apt9]
    }
  } 
  render() {
    const { apartments } = this.props
    const { pics } = this.state
    return (
      <>
        <h1>Oh, the places you can live with the money you give!</h1>
        <div className="index-cards">
          {apartments && apartments.map((apartment, index) => {
            return (
              <Row key={apartment.id} className="card">
                <Col sm="6">
                  <Card style={{ border: "2px solid darkblue", marginBottom: "10px"}}>
                    <CardTitle tag="h5" >Would you like the keys to {apartment.street}, {apartment.city}, {apartment.state}?
                    </CardTitle>
                    <CardImg src={pics[index]} alt="apt" top width="100%"/>
                    <br />
                    <NavLink to={`/apartmentshow/${apartment.id}`}>
                      <Button>
                      <FontAwesomeIcon icon={faKey} className="fa-icon" />Check Out the Amenities
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