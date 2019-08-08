import { asyncAction } from '../../utils'
import types from './types'

export const discover = (includeAdult: boolean = false) => dispatch => dispatch(asyncAction({
    actionType: types.DISCOVER_REQUEST,
    path: '/discover/movie-discover',
    params: {
        sort_by: 'popularity.desc',
        include_adult: includeAdult
    }
}))

export const search = (includeAdult: boolean = false) => dispatch => dispatch(asyncAction({
    actionType: types.SEARCH_REQUEST,
    path: '/search/movie',
    params: {
        include_adult: includeAdult
    }
}))

export default {
    discover,
    search
}
