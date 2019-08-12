import { combineReducers } from 'redux'

import { createReducer } from '../../utils'
import types from './types'

const initialState = {
    data: undefined,
    isLoading: false
}

export const stateShape = {
    detail: initialState,
    results: initialState,
    discoveries: initialState
}

const detail = createReducer({
    [ types.FETCH_MOVIE_REQUEST ]: state => ({...state, isLoading: true, data: undefined}),
    [ types.FETCH_MOVIE_SUCCESS ]: (state, {payload: {data}}) => ({...state, isLoading: false, data}),
    [ types.FETCH_MOVIE_FAILURE ]: (state, {payload: {error}}) => ({...state, isLoading: false, error})
}, initialState)

const hasPoster = ({poster_path}) => poster_path

const results = createReducer({
    [ types.SEARCH_REQUEST ]: state => ({...state, isLoading: true, data: undefined}),
    [ types.SEARCH_SUCCESS ]: (state, {payload: {data: {results}}}) => ({...state, isLoading: false, data: results.filter(hasPoster)}),
    [ types.SEARCH_FAILURE ]: (state, {payload: {error}}) => ({...state, isLoading: false, error})
}, initialState)

const discoveries = createReducer({
    [ types.DISCOVER_REQUEST ]: state => ({...state, isLoading: true, data: undefined}),
    [ types.DISCOVER_SUCCESS ]: (state, {payload: {data: {results}}}) => ({...state, isLoading: false, data: results.filter(hasPoster)}),
    [ types.DISCOVER_FAILURE ]: (state, {payload: {error}}) => ({...state, isLoading: false, error})
}, initialState)

export default combineReducers({
    detail,
    results,
    discoveries,
})
