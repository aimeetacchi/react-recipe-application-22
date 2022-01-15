import React from 'react'
import PropTypes from 'prop-types'

import { GridItem, RecipeName, RecipeCardFave } from './styles';

const RecipeItem = ({item}) => {

    return (
        <GridItem>
            <RecipeCardFave>
                <RecipeName>{item.name}</RecipeName>
                <p>Serves: {item.serves}</p>
                <p>Prep Time: {item.prepTime} mins<br/>
                Cooking Time: {item.cookingTime} mins</p>
                <p>Difficulty: {item.difficulty}</p>

                <p>Tags:<br/>
                    {item.tags.map((tag, key) => (
                        <span key={key}>{tag} </span>
                    ))}
                </p>
            </RecipeCardFave>
            {item.file.key !== 'public/undefined' && <img src={`https://${item.file.bucket}.s3.amazonaws.com/${item.file.key}`} alt='recipe'/>}
        </GridItem>
    )
}


RecipeItem.defaultProps = {
    item: {}
  };

RecipeItem.propTypes = {
    item: PropTypes.object
}

export default RecipeItem

