import React from 'react'
import { shallow } from 'enzyme'

import Movie from './movie'
import { stateShape } from '../../state/ducks/movies/reducers'
import { moviesActions } from '../../state';

describe('[Page] Movie', () => {
    it('should render properly', () => {
        const wrapper = shallow(<Movie movies={stateShape} movieId={'123'} moviesActions={moviesActions} />)

        expect(wrapper.hasClass('dm-movie')).toBe(true)
    })
})
