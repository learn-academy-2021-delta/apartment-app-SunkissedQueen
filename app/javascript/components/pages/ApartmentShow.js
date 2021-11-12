import React, { Component } from 'react'
import { Button, Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption  } from 'reactstrap' 
import { NavLink } from 'react-router-dom'
import { faUser, faH, faAddressBook, faHome, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw, faAddressCard, faListUl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import apt from '../assets/interior/aptint12.jpeg'
import kitchen from '../assets/interior/kitchen.jpeg'
import bath from '../assets/interior/bath.jpeg'


class ApartmentShow extends Component {

  render() {
    const { apartment } = this.props

    return (
        <>
        <h2>With these keys, you be awed!</h2>
        <CardImg src={apt} alt="apt" width="200px"/>
        <CardImg src={bath} alt="apt" width="125px"/>
        <CardImg src={kitchen} alt="apt" width="175px"/>
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