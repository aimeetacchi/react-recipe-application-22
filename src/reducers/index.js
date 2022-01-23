import { combineReducers } from 'redux';
import GetRecipesReducer from './getRecipes'
import SearchReducer from './Search'
import FaveRecipeReducer from './FaveRecipe';

// Add as many as you like.
const reducers = combineReducers({
    getRecipes: GetRecipesReducer,
    faveRecipe: FaveRecipeReducer,
    search: SearchReducer,
})

export default reducers;