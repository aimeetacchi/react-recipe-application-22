import React, { useEffect, useState } from 'react'
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

import PropTypes from 'prop-types'
import { getData } from '../../actions/getRecipes'
import { resetSearch } from '../../actions/Search'
import { useDispatch, useSelector } from 'react-redux'

import AddRecipeForm from '../AddRecipeForm/AddRecipeForm'
import RecipeItemFave from '../RecipeItemFave/RecipeItemFave';

import RecipeItem from '../RecipeItem/RecipeItem';
import SearchRecipeForm from '../Search/Search';

import styled from 'styled-components';

const Home = (props) => {
  const { authState } = props;
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [noSearchFound, setNoSearchFound] = useState(false);

  const data = useSelector((state) => state.getRecipes.data);
  // let faveData = useSelector((state) => state.faveRecipe.faveData);
  const loading = useSelector((state) => state.getRecipes.loading)
  const open = useSelector((state) => state.search.open)
 
  const dispatch = useDispatch();
  
  // SEARCH RECIPES
  const SearchRecipe = (value) => {
      const search = value.search.toLowerCase()
      /// DO SEARCH === 
      let result = data.filter(item => item.name.toLowerCase().includes(search));
      result.length < 1 ? setNoSearchFound(true) : setNoSearchFound(false);
      console.log(result)
      setSearchedRecipes(result);
  }

  useEffect(() => {
    // dispatch call action getData - if data array length is less than 1...
    if(data.length < 1){
      dispatch(getData())  
    }
    // Reset the search....
    dispatch(resetSearch())   
    // eslint-disable-next-line  
  }, [])


  useEffect(() => {
  }, [searchedRecipes, data])

 
  if(loading) return <div className="text-center">Loading...</div>

  return (
    <div className="home container text-center">
        <h1>Recipe App</h1>
        <p>Check out below the latest dishes we're loving</p>

        { authState === 'signedin' && ( <AddRecipeForm/> )}
        
        {/* { faveData.length > 0 && (
        <>
            <h2>Favourite Recipes</h2>
            <GridStyle>
            
            {faveData.length > 0 && faveData.map((item) => (
                <RecipeItemFave key={item.id} item={item} />
              ))   
            }
            </GridStyle>
            <DividerStyle/>
          </>
          )  
        } */}

        {
          open && (<SearchRecipeForm SearchRecipe={SearchRecipe} setSearchedRecipes={setSearchedRecipes} setNoSearchFound={setNoSearchFound} />)
        }
       
        { noSearchFound && (<p>No search results found.</p>)}
        {
        data && (<GridStyle>
        
          { searchedRecipes.length > 0 ? (

            searchedRecipes.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))
          ) :
          !noSearchFound && data.length > 0 && data.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))
          }
        </GridStyle>)
        }
    </div>
  )
}

const GridStyle = styled.div`
    display: block;
    margin-bottom: 20px; 

    /* DESKTOP */
    @media (min-width: 620px) {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      
    }
`;

const DividerStyle = styled.div`
  height: 15px;
  background-color: grey;
  margin: 30px 150px;
`


Home.defaultProps = {
  searchedRecipes: []
};

Home.propTypes = {
  searchedRecipes: PropTypes.array
}

export default Home