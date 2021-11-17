import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { faHome, faCity, faAddressCard, faUser, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyApartments from './MyApartments'

class ApartmentNew extends Component {
  constructor(props){
    super(props)
    this.state = {
        form: {
            street: "",
            city: "",
            state: "",
            manager: "",
            email: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            pets: "",
            user_id: this.props.current_user.id
        },
        submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createApartment(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    const { street, city, state, manager, email, price, bedrooms, bathrooms, pets } = this.state.form
    return (
      <div className="page-body">
        <h3>Add a New Apartment</h3>
        <div className="cards">
            <Form>
              <FormGroup>
                <Label for="street">
                  Street
                </Label>
                <Input
                  name="street"
                  type="text"
                  onChange={this.handleChange}
                  value={street}
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">
                  City
                </Label>
                <Input
                  name="city"
                  type="text"
                  onChange={this.handleChange}
                  value={city}
                />
              </FormGroup>
              <FormGroup>
                <Label for="state">
                  State
                </Label>
                <Input
                  name="state"
                  type="text"
                  onChange={this.handleChange}
                  value={state}
                />
              </FormGroup>
              <FormGroup>
                <Label for="manager">
                  Manager
                </Label>
                <Input
                  name="manager"
                  type="text"
                  onChange={this.handleChange}
                  value={manager}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">
                  Price
                </Label>
                <Input
                  name="price"
                  type="text"
                  onChange={this.handleChange}
                  value={price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bedrooms">
                  Bedrooms
                </Label>
                <Input
                  name="bedrooms"
                  type="number"
                  onChange={this.handleChange}
                  value={bedrooms}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bathrooms">
                  Bathrooms
                </Label>
                <Input
                  name="bathrooms"
                  type="number"
                  onChange={this.handleChange}
                  value={bathrooms}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pets">
                  Pets
                </Label>
                <Input
                  name="pets"
                  type="text"
                  onChange={this.handleChange}
                  value={pets}
                />
              </FormGroup>
              <br />
              <Button onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
            { this.state.submitted && <Redirect to="/myapartments" /> }

        </div>
      </div>
    )
  }
}
export default ApartmentNew
