export interface Movie {
    id: number,
    video: boolean,
    vote_count: number,
    genre_ids: number[],
    vote_average: number,
    title: string,
    popularity: number,
    poster_path: string,
    original_language: string,
    original_title: string,
    backdrop_path: string,
    adult: boolean,
    overview: string,
    release_date: Date,
}

export interface Movies {
    data: Movie | Movie[],

    isLoading: boolean
}

export interface MoviesActions {
    discover: Function,
    getDetails: Function,
    search: Function
}

interface InternalShape {
    isLoading: boolean
}

interface InternalListShape extends InternalShape {
    data?: Movie[]
}

interface InternalItemShape extends InternalShape {
    data?: Movie
}

export interface MoviesShape {
    detail: InternalItemShape,
    results: InternalListShape,
    discoveries: InternalListShape
}
