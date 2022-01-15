
import Types from './types';
import { API } from 'aws-amplify'
import { listRecipes } from '../graphql/queries'

// GET DATA EXAMPLE ==
export const getData = () => async dispatch => {
   
    try {
        dispatch(setLoading());
       
        // Getting the Data from Json file
        // let res = await fetch('storedata/storedata.json', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //       },
        // });
        // let data = await res.json();

        // Getting the Data from AWS
        // const recipesData = await API.graphql(graphqlOperation(listRecipes));

        // Getting the Data from AWS - unauth way
        const recipesData = await API.graphql({
            query: listRecipes,
            authMode: 'AWS_IAM'
        });

        const data = recipesData.data.listRecipes.items
        console.log('recipes', data)
        dispatch({
            type: Types.GET_DATA,
            payload: data
        })
     
        dispatch(getDataComplete()); 

    } catch(err) {
        console.log('error getting recipes:', err)

        // RUN FAIL ACTION ----
        dispatch(getDataFailed(err))
    }
}

// Get DATA Complete
export const getDataComplete = () => {
    return {
        type: Types.COMPLETE_GET_DATA,
    }
}

// Get DATA Failed
export const getDataFailed = (err) => {
    return {
        type: Types.COMPLETE_GET_DATA,
        payload: err
    }
}


// Set Loading to True..
export const setLoading = () => {
    return {
        type: Types.SET_LOADING,
    }
}
