import React from 'react'
import { shallow } from 'enzyme'

import Home from './home'

describe('[Page] Home', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Home movies={{}} />)

        expect(wrapper.hasClass('dm-home')).toBe(true)
    })
})
