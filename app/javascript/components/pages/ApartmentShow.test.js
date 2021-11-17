import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentShow from './ApartmentShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When ApartmentShow loads...',() => {
    it("displays a header", () => {
        const aptShow = shallow(<ApartmentShow />)
        expect(aptShow.find('h2').text()).toEqual('With these keys, you be awed!')
    })    
})