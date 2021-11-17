import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('When ApartmentIndex loads...',() => {
    it("displays a header", () => {
        const aptindex = shallow(<ApartmentIndex />)
        expect(aptindex.find('h1').text()).toEqual('Oh, the places you can live with the money you give!')
    })    
})