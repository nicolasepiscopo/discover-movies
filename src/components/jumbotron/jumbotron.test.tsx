import React from 'react'
import { shallow } from 'enzyme'

import Jumbotron from './jumbotron';

describe('[Component] Jumbotron', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <Jumbotron
                title={'Title'}
                subtitle={'Subtitle'}
            />
        )

        expect(wrapper.hasClass('dm-jumbotron')).toBe(true)
    })

    it('should render title', () => {
        const wrapper = shallow(
            <Jumbotron
                title={'Title'}
                subtitle={'Subtitle'}
            />
        )

        expect(wrapper.find('.dm-jumbotron__title').text()).toBe('Title')
    })

    it('should render subtitle', () => {
        const wrapper = shallow(
            <Jumbotron
                title={'Title'}
                subtitle={'Subtitle'}
            />
        )

        expect(wrapper.find('.dm-jumbotron__subtitle').text()).toBe('Subtitle')
    })

    it('should render additionalComponent if provided by props', () => {
        const wrapper = shallow(
            <Jumbotron
                title={'Title'}
                subtitle={'Subtitle'}
                additionalComponent={<div id="test">example</div>}
            />
        )

        expect(wrapper.find('.dm-jumbotron__additional').text()).toBe('example')
    })
})
