import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('When Footer loads...',() => {
    it("displays a link", () => {
        const footer = shallow(<Footer />)
        const footerLink = footer.find("a")
        expect(footerLink.length).toEqual(1)
    })  
})