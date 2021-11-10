import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faUser, faHome, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
        <>
        <h3>With these keys, you be awed!</h3>
        <br />
      <div className="page-body">
          {apartment &&
            <Card body className="card-show">
            <CardTitle tag="h4">Location</CardTitle>
              <CardText>
                <FontAwesomeIcon icon={faHome} className="fa-icon" />{apartment.street}, {apartment.city}, {apartment.state}
              </CardText>
              <br />
              <CardText>Manager Info</CardText>
              <h5>
                <FontAwesomeIcon icon={faUser} className="fa-icon" />{apartment.manager}, 
                {apartment.email}
              </h5>
              <br />
              <CardText>Details</CardText>
              <h5>
                <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />{apartment.price} per month
              </h5>
              <h5>
                <FontAwesomeIcon icon={faBed} className="fa-icon" />Bedrooms: {apartment.bedrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faToiletPaper} className="fa-icon" />Bathrooms: {apartment.bathrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPaw} className="fa-icon" />Pets Allowed: {apartment.pets}
              </h5>
              <br />
              <NavLink to="/apartmentindex">
                <Button>Back</Button>
              </NavLink>
            <br/>
        </Card>
        }
      </div>
      </>
    )
  }
}
export default ApartmentShow