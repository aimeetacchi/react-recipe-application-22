import Types from '../actions/types';

const { 
    SET_LOADING_ADD_FAVE_RECIPE,
    ADD_FAVE_RECIPE,
    ADD_FAVE_RECIPE_COMPLETED,
    ADD_FAVE_RECIPE_FAILED,
    SET_LOADING_REMOVE_FAVE_RECIPE,
    REMOVE_FAVE_RECIPE,
    REMOVE_FAVE_RECIPE_FAILED
    } = Types;

const initialState = {
    faveData: [],
    faveRecipeErrs: '',
    faveRecipeLoading: false,
    removeFaveRecipeLoading: false,
    complete: false,
    completeRemovingFaveRecipe: false,
}

const faveRecipe = (state = initialState, {type, payload}) => {
    switch (type) {
     
        case SET_LOADING_ADD_FAVE_RECIPE:
            return {
                ...state,
                faveRecipeLoading: true
        }
        case ADD_FAVE_RECIPE:
            return {
                ...state,
                faveData: [payload, ...state.faveData]
            }

        case ADD_FAVE_RECIPE_COMPLETED:
            return {
                ...state,
                faveRecipeLoading: false,
                getComplete: true
            }

        case ADD_FAVE_RECIPE_FAILED:
            return {
                ...state,
                faveRecipeLoading: false,
                faveRecipeErrs: payload
            }
        
        case SET_LOADING_REMOVE_FAVE_RECIPE:
            return {
                ...state,
                removeFaveRecipeLoading: true
        }
        
        case REMOVE_FAVE_RECIPE:
            console.log('running remove fave recipe in reducer.')
            return {
                ...state,
                faveData: state.faveData.filter(el => el.id !== payload),
                completeRemovingFaveRecipe: true,
            }
        case REMOVE_FAVE_RECIPE_FAILED:
            return {
                ...state,
                faveRecipeErrs: payload
            }
        default:
            return state;
    }
}


export default faveRecipe;