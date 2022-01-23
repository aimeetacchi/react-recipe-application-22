
import Types from './types';

const {
    SET_LOADING_ADD_FAVE_RECIPE,
    ADD_FAVE_RECIPE,
    ADD_FAVE_RECIPE_COMPLETED,
    ADD_FAVE_RECIPE_FAILED,
    SET_LOADING_REMOVE_FAVE_RECIPE,
    REMOVE_FAVE_RECIPE,
    REMOVE_FAVE_RECIPE_COMPLETED,
    REMOVE_FAVE_RECIPE_FAILED,
} = Types;

// ADD FAVE ==
export const addFaveRecipe = (item) => async dispatch => {
    try {
        dispatch(setLoadingAddFave());
       
        // Adding fave recipe ----

        dispatch({
            type: ADD_FAVE_RECIPE,
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
        type: ADD_FAVE_RECIPE_COMPLETED,
    }
}

// ADD FAVE Failed
export const addingFaveRecipesFailed = (err) => {
    return {
        type: ADD_FAVE_RECIPE_FAILED,
        payload: err
    }
}


// Set Loading to True..
export const setLoadingAddFave = () => {
    return {
        type: SET_LOADING_ADD_FAVE_RECIPE,
    }
}



// Remove FAVE ==
export const removeFaveRecipe = (item) => async dispatch => {
    try {
        dispatch(setLoadingRemoveFave());
       
        // Removing fave recipe ----

        dispatch({
            type: REMOVE_FAVE_RECIPE,
            payload: item
        })
     
        dispatch(removeFaveRecipesComplete()); 

    } catch(err) {
        console.log('error creating place:', err)

        // RUN FAIL ACTION ----
        dispatch(removeFaveRecipesFailed(err))
    }
}

// Remove Fave Complete
export const removeFaveRecipesComplete = () => {
    return {
        type: REMOVE_FAVE_RECIPE_COMPLETED,
    }
}

// Remove FAVE Failed
export const removeFaveRecipesFailed = (err) => {
    return {
        type: REMOVE_FAVE_RECIPE_FAILED,
        payload: err
    }
}


// Set Loading to True for Removing Fave..
export const setLoadingRemoveFave = () => {
    return {
        type: SET_LOADING_REMOVE_FAVE_RECIPE,
    }
}

