import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    movies: object //replace for state shape
}

const propTypes = {
    movies: PropTypes.object
}

const Home = (props: Props) => {
    return (
        <div className={'dm-home'}>
            Home
        </div>
    )
}

Home.propTypes = propTypes

export default Home
