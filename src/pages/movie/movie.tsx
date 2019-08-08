import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    movies: object //replace for state shape
}

const propTypes = {
    movies: PropTypes.object
}

const Movie = (props: Props) => {
    return (
        <div className={'dm-movie'}>
            Movie
        </div>
    )
}

Movie.propTypes = propTypes

export default Movie
