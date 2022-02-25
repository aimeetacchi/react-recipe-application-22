import styled from 'styled-components';

export const GridItem = styled.div`
  border-radius: 20px 20px 0 0;
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  
  @media (min-width: 720px) {
      width: 40%;
      margin-bottom: 0;
    }

  @media (min-width: 1124px) {
      width: 30%;
    } 
`;

export const RecipeName = styled.h2`
  font-size: 30px;
  margin: 0;
`;

export const RecipeCard = styled.div`
  padding: 10px;
  flex-grow: 1;
`;

export const AddToFaveBtn = styled.button`
    border: none;
    background-color: #4CAF50;
    padding: 10px 0;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #2DAF70;
    }
`;