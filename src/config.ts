import { SuperAgent } from 'dotenv'

export const api = {
    basePath: 'https://api.themoviedb.org/3/',
    key: SuperAgent ? SuperAgent.get(process.env.THE_MOVIE_DB_API_KEY) : ''
}
export const imageBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'

export default {
    api,
    imageBasePath,
}
