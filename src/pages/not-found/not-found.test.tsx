import React from 'react'
import { shallow } from 'enzyme'

import NotFound from './not-found'

describe('[Page] NotFound', () => {
    it('should render properly', () => {
        const wrapper = shallow(<NotFound path='/not-found' default />)

        expect(wrapper.hasClass('dm-not-found')).toBe(true)
    })
})
