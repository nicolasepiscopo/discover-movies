import reducer, { stateShape } from './reducers'
import types from './types'

describe('[Reducer] Movies', () => {
    const initialState = stateShape

    it('should return the initial state', () => {
        expect(reducer(undefined, {type: null})).toStrictEqual(initialState)
    })

    it('should set loading state on true when fetching details', () => {
        const action = {
            type: types.FETCH_MOVIE_REQUEST,
            payload: {}
        }
        const expectedResult = {
            ...initialState,
            detail: {
                ...initialState.detail,
                isLoading: true
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set loading state on true when searching', () => {
        const action = {
            type: types.SEARCH_REQUEST,
            payload: {}
        }
        const expectedResult = {
            ...initialState,
            results: {
                ...initialState.results,
                isLoading: true
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set loading state on true when discovering', () => {
        const action = {
            type: types.DISCOVER_REQUEST,
            payload: {}
        }
        const expectedResult = {
            ...initialState,
            discoveries: {
                ...initialState.discoveries,
                isLoading: true
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set data and loading state to false when discovering succeed', () => {
        const action = {
            type: types.DISCOVER_SUCCESS,
            payload: {
                data: {"page":1,"total_results":430481,"total_pages":21525,"results":[{"vote_count":389,"id":384018,"video":false,"vote_average":6.6,"title":"Fast & Furious Presents: Hobbs & Shaw","popularity":445.865,"poster_path":"\/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"backdrop_path":"\/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg","adult":false,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.","release_date":"2019-08-01"},{"vote_count":1579,"id":420818,"video":false,"vote_average":7.2,"title":"The Lion King","popularity":344.807,"poster_path":"\/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","original_language":"en","original_title":"The Lion King","genre_ids":[12,16,10751,18,28],"backdrop_path":"\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg","adult":false,"overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-12"}]}
            }
        }
        const expectedResult = {
            ...initialState,
            discoveries: {
                data: [{"vote_count":389,"id":384018,"video":false,"vote_average":6.6,"title":"Fast & Furious Presents: Hobbs & Shaw","popularity":445.865,"poster_path":"\/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"backdrop_path":"\/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg","adult":false,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.","release_date":"2019-08-01"},{"vote_count":1579,"id":420818,"video":false,"vote_average":7.2,"title":"The Lion King","popularity":344.807,"poster_path":"\/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","original_language":"en","original_title":"The Lion King","genre_ids":[12,16,10751,18,28],"backdrop_path":"\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg","adult":false,"overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-12"}],
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set data and loading state to false when search succeed', () => {
        const action = {
            type: types.SEARCH_SUCCESS,
            payload: {
                data: {"page":1,"total_results":430481,"total_pages":21525,"results":[{"vote_count":389,"id":384018,"video":false,"vote_average":6.6,"title":"Fast & Furious Presents: Hobbs & Shaw","popularity":445.865,"poster_path":"\/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"backdrop_path":"\/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg","adult":false,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.","release_date":"2019-08-01"},{"vote_count":1579,"id":420818,"video":false,"vote_average":7.2,"title":"The Lion King","popularity":344.807,"poster_path":"\/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","original_language":"en","original_title":"The Lion King","genre_ids":[12,16,10751,18,28],"backdrop_path":"\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg","adult":false,"overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-12"}]}
            }
        }
        const expectedResult = {
            ...initialState,
            results: {
                data: [{"vote_count":389,"id":384018,"video":false,"vote_average":6.6,"title":"Fast & Furious Presents: Hobbs & Shaw","popularity":445.865,"poster_path":"\/keym7MPn1icW1wWfzMnW3HeuzWU.jpg","original_language":"en","original_title":"Fast & Furious Presents: Hobbs & Shaw","genre_ids":[28],"backdrop_path":"\/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg","adult":false,"overview":"A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.","release_date":"2019-08-01"},{"vote_count":1579,"id":420818,"video":false,"vote_average":7.2,"title":"The Lion King","popularity":344.807,"poster_path":"\/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","original_language":"en","original_title":"The Lion King","genre_ids":[12,16,10751,18,28],"backdrop_path":"\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg","adult":false,"overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","release_date":"2019-07-12"}],
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set data and loading state to false when fetching details succeed', () => {
        const action = {
            type: types.FETCH_MOVIE_SUCCESS,
            payload: {
                data: [1, 2, 3]
            }
        }
        const expectedResult = {
            ...initialState,
            detail: {
                data: [1, 2, 3],
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set error and loading state to false when discovering failed', () => {
        const action = {
            type: types.DISCOVER_FAILURE,
            payload: {
                error: 'Example error'
            }
        }
        const expectedResult = {
            ...initialState,
            discoveries: {
                data: undefined,
                error: 'Example error',
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set error and loading state to false when search failed', () => {
        const action = {
            type: types.SEARCH_FAILURE,
            payload: {
                error: 'Example error'
            }
        }
        const expectedResult = {
            ...initialState,
            results: {
                data: undefined,
                error: 'Example error',
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })

    it('should set error and loading state to false when fetching details failed', () => {
        const action = {
            type: types.FETCH_MOVIE_FAILURE,
            payload: {
                error: 'Example error'
            }
        }
        const expectedResult = {
            ...initialState,
            detail: {
                data: undefined,
                error: 'Example error',
                isLoading: false
            }
        }

        expect(reducer(initialState, action)).toStrictEqual(expectedResult)
    })
})
