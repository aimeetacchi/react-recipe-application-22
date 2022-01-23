
import Types from './types';
import { API } from 'aws-amplify'
import { createRecipe } from '../graphql/mutations'

// ADD RECIPE  ==
export const addRecipe = (recipe) => async dispatch => {
   
    try {
        dispatch(setLoading());
    
    
        // Adding the Data from AWS
        const res = await API.graphql({
            query: createRecipe,
            variables: {input: recipe},
            authMode: 'AWS_IAM',
        });
        console.log('Recipe Data', res.data.createRecipe)
        
        const data = res.data.createRecipe.items

        dispatch({
            type: Types.ADD_RECIPE,
            payload: data
        })
     
        dispatch(addRecipeComplete()); 

    } catch(err) {
        console.log('error Adding recipes:', err)

        // RUN FAIL ACTION ----
        dispatch(addRecipeFailed(err))
    }
}

// ADDED RECIPE Complete
export const addRecipeComplete = () => {
    return {
        type: Types.ADD_RECIPE_COMPLETE,
    }
}

// ADDED RECIPE Failed
export const addRecipeFailed = (err) => {
    return {
        type: Types.ADD_RECIPE_FAILED,
        payload: err
    }
}


// Set Loading to True..
export const setLoading = () => {
    return {
        type: Types.ADD_RECIPE_LOADING,
    }
}
