/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String) {
    onCreateRecipe(owner: $owner) {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        items {
          id
          numberLikes
          owner
          createdAt
          updatedAt
          recipeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String) {
    onUpdateRecipe(owner: $owner) {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        items {
          id
          numberLikes
          owner
          createdAt
          updatedAt
          recipeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String) {
    onDeleteRecipe(owner: $owner) {
      id
      name
      description
      prepTime
      cookingTime
      difficulty
      serves
      ingredients
      ingredientsSet2
      ingredientsSet3
      file {
        bucket
        region
        key
      }
      tags
      owner
      likes {
        items {
          id
          numberLikes
          owner
          createdAt
          updatedAt
          recipeLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
      id
      numberLikes
      owner
      recipe {
        id
        name
        description
        prepTime
        cookingTime
        difficulty
        serves
        ingredients
        ingredientsSet2
        ingredientsSet3
        file {
          bucket
          region
          key
        }
        tags
        owner
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeLikesId
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
      id
      numberLikes
      owner
      recipe {
        id
        name
        description
        prepTime
        cookingTime
        difficulty
        serves
        ingredients
        ingredientsSet2
        ingredientsSet3
        file {
          bucket
          region
          key
        }
        tags
        owner
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeLikesId
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
      id
      numberLikes
      owner
      recipe {
        id
        name
        description
        prepTime
        cookingTime
        difficulty
        serves
        ingredients
        ingredientsSet2
        ingredientsSet3
        file {
          bucket
          region
          key
        }
        tags
        owner
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeLikesId
    }
  }
`;
