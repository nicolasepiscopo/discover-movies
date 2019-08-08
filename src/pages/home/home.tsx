import React from 'react'
import PropTypes from 'prop-types'
import { Page, Jumbotron, Input } from '../../components'

interface Props {
    movies: object //replace for state shape
}

const propTypes = {
    movies: PropTypes.object
}

const Home = (props: Props) => {
    return (
        <Page className={'dm-home'}>
            <Jumbotron
                title="Discover your favourite movies"
                subtitle="All you ever wanted in only one place"
                additionalComponent={(
                    <Input placeholder="Search for a movie..." />
                )}
            />
        </Page>
    )
}

Home.propTypes = propTypes

export default Home
