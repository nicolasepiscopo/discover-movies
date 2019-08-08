import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'

import Home from './containers/home'
import Movie from './containers/movie'
import NotFound from './pages/not-found'
import store from './state/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Router>
            <Home path='/' />
            <Movie path='/movie/:movieId' />
            <NotFound path='/not-found' default />
        </Router>
    </Provider>
  )
}

export default App
