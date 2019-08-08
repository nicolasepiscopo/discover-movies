import React from 'react'
import PropTypes from 'prop-types'
import { Page } from '../../components';

interface Props {
    movies: object //replace for state shape
}

const propTypes = {
    movies: PropTypes.object
}

const Movie = (props: Props) => {
    return (
        <Page className={'dm-movie'} isPaddedTop={false}>
            Movie
        </Page>
    )
}

Movie.propTypes = propTypes

export default Movie
