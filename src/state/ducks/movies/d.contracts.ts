export interface Movie {

}

export interface Movies {
    item: Movie,
    list: Movie[],

    isLoadingItem: boolean,
    isLoadingList: boolean,
}
