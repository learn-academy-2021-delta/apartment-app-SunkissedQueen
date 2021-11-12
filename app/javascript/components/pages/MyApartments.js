import React, { Component } from 'react'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardImg, Card, Button, CardTitle, Row, Col } from 'reactstrap'
import pic from '../assets/aptmoney.jpeg'
import { NavLink } from 'react-router-dom'

class MyApartments extends Component {
  render() {
    const { apartments } = this.props
    return (
        <>
        <h1>What you working with!</h1>
        <div className="index-cards">
          {apartments && apartments.map((apartment, index) => {
            return (
              <Row key={apartment.id} className="card">
                <Col sm="6">
                  <Card style={{ border: "2px solid darkblue", marginBottom: "10px"}}>
                    <CardTitle tag="h5" >Would you like the keys to {apartment.street}, {apartment.city}, {apartment.state}?
                    </CardTitle>
                    <CardImg src={pic} alt="apt" top width="100%"/>
                    <br />
                <Button
                  onClick={() => this.props.deleteApartment(apartment.id)}
                >
                  Delete Listing
                </Button>
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
export default MyApartments