
import Types from './types';

// ADD FAVE ==
export const AddFaveRecipe = (item) => async dispatch => {
    try {
        dispatch(setLoadingAddFave());
       
        // Adding fave recipe ----

        dispatch({
            type: Types.ADD_FAVE_RECIPE,
            payload: item
        })
     
        dispatch(addingFaveRecipesComplete()); 

    } catch(err) {
        console.log('error creating place:', err)

        // RUN FAIL ACTION ----
        dispatch(addingFaveRecipesFailed(err))
    }
}

// Add Fave Complete
export const addingFaveRecipesComplete = () => {
    return {
        type: Types.ADD_FAVE_RECIPE_COMPLETED,
    }
}

// ADD FAVE Failed
export const addingFaveRecipesFailed = (err) => {
    return {
        type: Types.ADD_FAVE_RECIPE_FAILED,
        payload: err
    }
}


// Set Loading to True..
export const setLoadingAddFave = () => {
    return {
        type: Types.SET_LOADING_ADD_FAVE_RECIPE,
    }
}
