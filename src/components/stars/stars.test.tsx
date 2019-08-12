
import { shallow } from 'enzyme'
import React from 'react'
import Stars from './stars'

describe('[Component] Stars', () => {
    it('should render the rating properly', () => {
        const wrapper = shallow(
            <Stars
                rating={4.5}
            />
        )

        expect(wrapper.find('.dm-stars__star').length).toEqual(5)
        expect(wrapper.find('.dm-stars__star--empty').length).toEqual(3)
    })
})
