import { combineReducers } from 'redux';
import GetRecipesReducer from './getRecipes'
import SearchReducer from './Search'
import AddFaveRecipeReducer from './AddFaveRecipe';

// Add as many as you like.
const reducers = combineReducers({
    getRecipes: GetRecipesReducer,
    addFaveRecipe: AddFaveRecipeReducer,
    search: SearchReducer,
})

export default reducers;