import reducer from './reducers'

describe('[Reducer] Movies', () => {
    const initialState = {
        item: {},
        list: [],
        isLoadingItem: false,
        isLoadingList: false,
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {type: null})).toStrictEqual(initialState)
    })
})
