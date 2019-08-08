import axios from 'axios'

interface Api {
    basePath: string,
    key: string
}

const asyncAction = (configuration: any) => (dispatch: Function, getState: Function, api: Api) => {
    const { actionType, path = '', params = {}, ...customAxiosConfiguration } = configuration
    const baseActionType = actionType.replace('_REQUEST', '')

    dispatch({
        type: `${baseActionType}_REQUEST`,
        payload: {}
    })

    return axios({
        url: api.basePath + path,
        params: {
            ...params,
            api_key: api.key,
            language: 'en-US'
        },
        ...customAxiosConfiguration
    })
        .then(payload => {
            dispatch({
                type: `${baseActionType}_SUCCESS`,
                payload
            })
            return payload
        })
        .catch(error => {
            dispatch({
                type: `${baseActionType}_FAILURE`,
                payload: {
                    error
                }
            })
            throw error
        })
}

export default asyncAction
