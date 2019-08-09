import React from 'react'
import { shallow } from 'enzyme'
import Input from './input'

describe('[Component] Input', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Input placeholder="" onChange={() => {}} />)

        expect(wrapper.hasClass('dm-input')).toBe(true)
    })
})
