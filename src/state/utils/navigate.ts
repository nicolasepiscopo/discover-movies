import { navigate } from '@reach/router'

export default (path: string, config?: object) => {
    Promise.resolve().then(() => {
        navigate(path, config)
        window.scrollTo(0, 0)
    })
}
