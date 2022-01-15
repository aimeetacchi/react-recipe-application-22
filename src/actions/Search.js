import Types from './types';

// Open Search
export const Search = () => {

    return {
        type: Types.SEARCH,
    }
}

export const resetSearch = () => {
    return {
        type: Types.RESET_SEARCH,
    }
}