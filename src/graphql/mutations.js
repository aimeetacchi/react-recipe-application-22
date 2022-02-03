/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCookBook = /* GraphQL */ `
  mutation CreateCookBook(
    $input: CreateCookBookInput!
    $condition: ModelCookBookConditionInput
  ) {
    createCookBook(input: $input, condition: $condition) {
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
export const updateCookBook = /* GraphQL */ `
  mutation UpdateCookBook(
    $input: UpdateCookBookInput!
    $condition: ModelCookBookConditionInput
  ) {
    updateCookBook(input: $input, condition: $condition) {
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
export const deleteCookBook = /* GraphQL */ `
  mutation DeleteCookBook(
    $input: DeleteCookBookInput!
    $condition: ModelCookBookConditionInput
  ) {
    deleteCookBook(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
