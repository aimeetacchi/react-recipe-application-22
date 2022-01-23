import styled from 'styled-components';

export const GridItem = styled.div`
  border-radius: 20px 20px 0 0;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
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

export const RecipeCardFave = styled.div`
  padding: 10px;
  flex-grow: 1;

  .removeFave {
    cursor: pointer;
    padding: 0 20px;
    display: block;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
`;