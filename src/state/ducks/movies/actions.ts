import { asyncAction } from '../../utils'
import types from './types'

export const discover = (includeAdult: boolean = false) => dispatch => dispatch(asyncAction({
    actionType: types.DISCOVER_REQUEST,
    path: 'discover/movie',
    params: {
        sort_by: 'popularity.desc',
        include_adult: includeAdult
    }
}))

export const search = (term: string, includeAdult: boolean = false) => dispatch => dispatch(asyncAction({
    actionType: types.SEARCH_REQUEST,
    path: 'search/movie',
    params: {
        include_adult: includeAdult,
        query: term
    }
}))

export const getDetails = (movieId: number) => dispatch => dispatch(asyncAction({
    actionType: types.FETCH_MOVIE_REQUEST,
    path: `movie/${movieId}`
}))

export default {
    discover,
    getDetails,
    search,
}
