import Types from '../actions/types';

const initialState = {
    faveData: [],
    faveRecipeErrs: '',
    faveRecipeLoading: false,
    complete: false,
}

const addFaveRecipe = (state = initialState, {type, payload}) => {
    switch (type) {
      
        case Types.SET_LOADING_ADD_FAVE_RECIPE:
            return {
                ...state,
                faveRecipeLoading: true
        }
        case Types.ADD_FAVE_RECIPE:
            return {
                ...state,
                faveData: [payload, ...state.faveData]
            }

        case Types.ADD_FAVE_RECIPE_COMPLETED:
            return {
                ...state,
                faveRecipeLoading: false,
                getComplete: true
            }

        case Types.ADD_FAVE_RECIPE_FAILED:
            return {
                ...state,
                faveRecipeLoading: false,
                faveRecipeErrs: payload
            }

        default:
            return state;
    }
}

export default addFaveRecipe;