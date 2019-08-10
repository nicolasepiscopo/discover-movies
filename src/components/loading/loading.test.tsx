import React from 'react'
import { shallow } from 'enzyme'
import Loading from './loading'

describe('[Component] Loading', () => {
    it('should render properly', () => {
        const component = shallow(
            <Loading />
        )

        expect(component.hasClass('dm-loading')).toBe(true)
    })
})
