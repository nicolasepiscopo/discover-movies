import './movie.scss'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Page, Stars } from '../../components'
import { MoviesActions, MoviesShape } from '../../state';
import { imageBasePath, backdropBasePath } from '../../config';

interface Props {
    movies: MoviesShape,
    moviesActions: MoviesActions,
    movieId: string,
}

const propTypes = {
    movies: PropTypes.object,
    movieId: PropTypes.string
}

const Movie = (props: Props) => {
    const { movies: { detail: { data = {}, isLoading } }, movieId, moviesActions: { getDetails } } = props
    const baseClassName = 'dm-movie'
    const movie = data as Movie

    useEffect(() => {
        getDetails(movieId)
    }, [])

    return (
        <Page
            backdrop={backdropBasePath + movie.backdrop_path}
            className={baseClassName}
            isPaddedTop={false}
            isLoading={isLoading}
        >
            {!isLoading && (
                <div className={baseClassName + '__container'}>
                    <div className={baseClassName + '__background'}>
                        <div className={baseClassName + '__poster'}>
                            <img
                                className={baseClassName + '__image'}
                                src={imageBasePath + movie.poster_path}
                                alt={movie.title}
                            />
                        </div>
                        <div className={baseClassName + '__details'}>
                            <h1>{movie.title} <small>({moment(movie.release_date).format('YYYY')})</small></h1>
                            <div className={baseClassName + '__overview'}>
                                {movie.overview}
                            </div>
                            <Stars
                                rating={movie.vote_average}
                            />
                        </div>
                    </div>
                </div>
            )}
        </Page>
    )
}

Movie.propTypes = propTypes

export default Movie
