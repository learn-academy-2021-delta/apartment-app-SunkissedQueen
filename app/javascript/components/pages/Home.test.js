import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home loads...',() => {
    it("displays a table", () => {
        const home = shallow(<Home />)
        expect(home.find('table').length).toEqual(1)
    })    
})