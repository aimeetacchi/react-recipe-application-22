/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCookBook = /* GraphQL */ `
  subscription OnCreateCookBook($owner: String) {
    onCreateCookBook(owner: $owner) {
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
export const onUpdateCookBook = /* GraphQL */ `
  subscription OnUpdateCookBook($owner: String) {
    onUpdateCookBook(owner: $owner) {
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
export const onDeleteCookBook = /* GraphQL */ `
  subscription OnDeleteCookBook($owner: String) {
    onDeleteCookBook(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
