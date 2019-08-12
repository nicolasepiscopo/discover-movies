import './home.scss'

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Page, Jumbotron, Input, Poster, Loading } from '../../components'
import { MoviesActions, MoviesShape } from '../../state'
import { imageBasePath } from '../../config'
import { useDebouncedEffect, navigate } from '../../state/utils';

interface Props {
    movies: MoviesShape,
    moviesActions: MoviesActions
}

const propTypes = {
    movies: PropTypes.object,
    moviesActions: PropTypes.object,
}

const Home = (props: Props) => {
    const {
        movies: { discoveries, results },
        moviesActions: { discover, search }
    } = props
    const [term, setTerm] = useState('')
    const discoveredMovies = discoveries.data
    const resultsMovies = results.data
    const isLoading = discoveries.isLoading || results.isLoading
    const isSearching = !!term

    useEffect(() => {
        discover()
    }, [])

    useDebouncedEffect(() => {
        if (term)
            search(term)
    }, [term])

    return (
        <Page className={'dm-home'} isLoading={isLoading}>
            <Jumbotron
                title="Discover your favourite movies"
                subtitle="All you ever wanted in only one place"
                additionalComponent={(
                    <Input
                        placeholder="Search for a movie..."
                        onChange={e => setTerm(e.target.value)}
                    />
                )}
            />
            {resultsMovies && isSearching && (
                <div className="dm-home__results">
                    <h3 className="dm-home__title">
                        🔎 <strong>Searching:</strong> {term}
                    </h3>
                    {!resultsMovies.length && (
                        <h3 className="dm-home__title">
                            No results
                        </h3>
                    )}
                    <div className="dm-home__images">
                        {resultsMovies.map(movie => (
                            <Poster
                                key={movie.id}
                                src={imageBasePath + movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                onClick={navigate.bind(null, `/movie/${movie.id}`)}
                            />
                        ))}
                    </div>
                </div>
            )}
            {discoveredMovies && !isSearching && (
                <div className="dm-home__popular">
                    <h3 className="dm-home__title">
                        ✨ Popular Movies ✨
                    </h3>
                    <div className="dm-home__images">
                        {discoveredMovies.filter(({poster_path}) => poster_path).map(movie => (
                            <Poster
                                key={movie.id}
                                src={imageBasePath + movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                onClick={navigate.bind(null, `/movie/${movie.id}`)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Page>
    )
}

Home.propTypes = propTypes

export default Home
