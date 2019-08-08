import React from 'react'
import { shallow } from 'enzyme'

import Movie from './movie'

describe('[Page] Movie', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Movie movies={{}} />)

        expect(wrapper.hasClass('dm-movie')).toBe(true)
    })
})
