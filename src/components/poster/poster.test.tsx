import { shallow } from 'enzyme'
import React from 'react'
import Poster from './poster'

describe('[Component] Poster', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <Poster
                src={'/avengers-end-game.png'}
                title={'Avengers: End Game'}
                rating={4.5}
            />
        )

        expect(wrapper.hasClass('dm-poster')).toBe(true)
    })

    it('should render the image properly', () => {
        const wrapper = shallow(
            <Poster
                src={'/avengers-end-game.png'}
                title={'Avengers: End Game'}
                rating={4.5}
            />
        )

        expect(wrapper.find('.dm-poster img').hasClass('dm-poster__image')).toBe(true)
        expect(wrapper.find('.dm-poster img').prop('src')).toEqual('/avengers-end-game.png')
        expect(wrapper.find('.dm-poster img').prop('alt')).toEqual('Avengers: End Game')
    })

    it('should render the info properly', () => {
        const wrapper = shallow(
            <Poster
                src={'/avengers-end-game.png'}
                title={'Avengers: End Game'}
                rating={4.5}
            />
        )

        expect(wrapper.find('.dm-poster>div').hasClass('dm-poster__info')).toBe(true)
        expect(wrapper.find('.dm-poster>div').hasClass('dm-poster__info')).toBe(true)
    })

    it('should render the title properly', () => {
        const wrapper = shallow(
            <Poster
                src={'/avengers-end-game.png'}
                title={'Avengers: End Game'}
                rating={4.5}
            />
        )

        expect(wrapper.find('.dm-poster__title').text()).toEqual('Avengers: End Game')
    })

    it('should transform the component as a button if onClick provided on props', () => {
        const wrapper = shallow(
            <Poster
                src={'/avengers-end-game.png'}
                title={'Avengers: End Game'}
                rating={4.5}
                onClick={() => {}}
            />
        )

        expect(wrapper.find('.dm-poster').prop('role')).toEqual('button')
        expect(wrapper.find('.dm-poster').hasClass('dm-poster--as-button')).toEqual(true)
    })
})
