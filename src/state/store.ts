import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './ducks'
import { api } from '../config'

const middleware = applyMiddleware(thunk.withExtraArgument(api))
const devEnvironment = process.env.NODE_ENV === 'development'
let composeEnhancers = compose

if (devEnvironment && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'])
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']

const store = createStore(reducers, composeEnhancers(middleware))

export default store
