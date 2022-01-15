import Types from './types';
import { Auth } from 'aws-amplify';

// ADD FAVE ==
export const signIn = (credentials) => async dispatch => {
    try {
        dispatch(setLoadingSignIn());
       
          // SIGN IN TO AWS WITH COGNITO
            const user = await Auth.signIn(credentials);

        // dispatch({
        //     type: Types.ADD_FAVE_RECIPE,
        //     payload: item
        // })
     
        dispatch(signInComplete()); 

    } catch(err) {
        console.log('error signing in:', err)

        // RUN FAIL ACTION ----
        dispatch(signInFailed(err))
    }
}


// Add Fave Complete
export const signInComplete = () => {
    return {
        type: Types.SIGN_IN_COMPLETE
    }
}

// ADD FAVE Failed
export const signInFailed = (err) => {
    return {
        type: Types.SIGN_IN_FAILED,
        payload: err
    }
}


// Set Loading to True..
export const setLoadingSignIn = () => {
    return {
        type: Types.SET_LOADING_ADD_SIGN_IN,
    }
}
