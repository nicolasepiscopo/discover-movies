import React from 'react'
import { shallow } from 'enzyme'

import Home from './home'
import { stateShape } from '../../state/ducks/movies/reducers'
import { moviesActions } from '../../state'

describe('[Page] Home', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <Home
                movies={stateShape}
                moviesActions={moviesActions}
            />
        )

        expect(wrapper.hasClass('dm-home')).toBe(true)
    })
})
