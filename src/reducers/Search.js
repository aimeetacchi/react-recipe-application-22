import Types from '../actions/types';

const initialState = {
    open: false,
}

const SearchBox = (state = initialState, {type, payload}) => {
    switch (type) {
     
        case Types.SEARCH:
            return {
                ...state,
                open: true
        }
        case Types.RESET_SEARCH:
            return {
                ...state,
                open: false
            }
        default:
            return state;
    }
}

export default SearchBox;