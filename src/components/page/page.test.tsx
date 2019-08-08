import React from 'react'
import { shallow } from 'enzyme'

import Page from './page';

describe('[Component] Page', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Page>Content</Page>)

        expect(wrapper.hasClass('dm-page')).toBe(true)
    })

    it('should render the navbar', () => {
        const wrapper = shallow(<Page>Content</Page>)

        expect(wrapper.find('.dm-page>nav').hasClass('dm-page__navbar')).toBe(true)
    })

    it('should render the navbar', () => {
        const wrapper = shallow(<Page>Content</Page>)

        expect(wrapper.find('.dm-page>nav>ul>li').hasClass('dm-page__navbar-title')).toBe(true)
    })

    it('should add padded-top modifier if isPaddedTop prop is true', () => {
        const wrapper = shallow(<Page>Content</Page>)

        expect(wrapper.find('.dm-page').hasClass('dm-page--padded-top')).toBe(true)
    })

    it('should not add padded-top modifier if isPaddedTop prop is true', () => {
        const wrapper = shallow(<Page isPaddedTop={false}>Content</Page>)

        expect(wrapper.find('.dm-page').hasClass('dm-page--padded-top')).toBe(false)
    })
})
