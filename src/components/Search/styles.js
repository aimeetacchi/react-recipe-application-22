import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    position: relative;

    label {
        margin-right: 10px;
    }
    input[type=text] {
        padding: 14px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 10px 0 0 10px;
        box-sizing: border-box;
    }

    button[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #2DAF70;
        }
    }
    /* Desktop */
    @media (min-width: 720px) {
   
    }
`;

export const ResetBtn = styled.button`
    background-color: #EE4B2B;
    color: white;
    padding: 0 20px;
    min-height: 45px;
    border: none;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
`;

export const SearchGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchFormGroup = styled.div`

`;

export const SearchFormError = styled.div`
    position: absolute;
    top: 0px;
    right: 0;
    background-color: red;
    color: white;
    padding: 3px 116px;
`;

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;