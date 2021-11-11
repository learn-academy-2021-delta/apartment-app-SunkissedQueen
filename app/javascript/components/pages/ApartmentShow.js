import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faUser, faH, faAddressBook, faHome, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw, faAddressCard, faListUl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
        <>
        <h2>With these keys, you be awed!</h2>
      <div className="page-body">
          {apartment &&
            <Card body className="card-show">

            <CardTitle tag="h4">
                <FontAwesomeIcon icon={faHome} className="fa-icon" />
                    Location
            </CardTitle>
              <CardText>
                {apartment.street}, {apartment.city}, {apartment.state}
              </CardText>

              <CardTitle tag="h4">
                <FontAwesomeIcon icon={faListUl} className="fa-icon" />
                    Details
              </CardTitle>
              <CardText>
                <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />{apartment.price} per month
              </CardText>
              <CardText>
                <FontAwesomeIcon icon={faBed} className="fa-icon" />Bedrooms: {apartment.bedrooms}
              </CardText>
              <CardText>
                <FontAwesomeIcon icon={faToiletPaper} className="fa-icon" />Bathrooms: {apartment.bathrooms}
              </CardText>
              <CardText>
                <FontAwesomeIcon icon={faPaw} className="fa-icon" />Pets Allowed: {apartment.pets}
              </CardText>

              <CardTitle tag="h4">
                <FontAwesomeIcon icon={faAddressCard} className="fa-icon" />
                    Manager Info
              </CardTitle>
                <CardText>
                    {apartment.manager} 
                </CardText>
                <CardText>
                    {apartment.email}
                </CardText>

              <NavLink to="/apartmentindex">
                <Button>Back</Button>
              </NavLink>
        </Card>
        }
      </div>
      </>
    )
  }
}
export default ApartmentShow