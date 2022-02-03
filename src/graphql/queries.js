/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCookBook = /* GraphQL */ `
  query GetCookBook($id: ID!) {
    getCookBook(id: $id) {
      id
      name
      posts {
        items {
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
          tags
          owner
          createdAt
          updatedAt
          cookBookPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCookBooks = /* GraphQL */ `
  query ListCookBooks(
    $filter: ModelCookBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCookBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
      cookBook {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          recipeCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      cookBookPostsId
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        cookBook {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        cookBookPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
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
        cookBook {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        cookBookPostsId
      }
      content
      createdAt
      updatedAt
      recipeCommentsId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
          tags
          owner
          createdAt
          updatedAt
          cookBookPostsId
        }
        content
        createdAt
        updatedAt
        recipeCommentsId
        owner
      }
      nextToken
    }
  }
`;
