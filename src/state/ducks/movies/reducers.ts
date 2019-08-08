import { combineReducers } from 'redux'

import { createReducer } from '../../utils'

const itemInitialState = {}
const item = createReducer({

}, itemInitialState)

const listInitialState = []
const list = createReducer({

}, listInitialState)

const isLoadingItem = createReducer({

}, false)

const isLoadingList = createReducer({

}, false)

export default combineReducers({
    item,
    list,

    isLoadingItem,
    isLoadingList
})
