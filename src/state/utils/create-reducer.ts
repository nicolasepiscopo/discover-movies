interface Action {
    type: string
}

function createReducer (stateManager: Object = {}, initialState: any = {}) {
    return (state: any, action: any) => {
        const reducerFunction = stateManager[action.type]
        
        if (reducerFunction)
            return reducerFunction(state, action)
        
        return state || initialState
    }
}

export default createReducer