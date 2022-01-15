import React from 'react'
// import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'

import { SearchForm, SearchFormGroup, SearchFormError, SearchGrid, FormWrapper, ResetBtn } from './styles'

const SearchRecipeForm = ({
  SearchRecipe,
  setSearchedRecipes,
  setNoSearchFound
}) => {
  
    const onSubmit = (value) => {
      SearchRecipe(value)
    }

    const validate = (values) => {
      const errors = {};
      if (!values.search) {
        errors.search = "Required";
      }
      return errors;
    }

    return (
      <FormWrapper>
        <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, values, reset }) => (
          <SearchForm onSubmit={handleSubmit}>
            <Field name="search">
              {({ input, meta }) => (
                  <>
                    <SearchGrid>
                    <SearchFormGroup>
                      <label htmlFor="search">Search Recipes</label>
                      <input id="search" {...input} type="text" placeholder="search.." />
                    </SearchFormGroup>
                    </SearchGrid>
                    {
                      meta.error && meta.touched && (
                        <SearchFormError>{meta.error}</SearchFormError>
                      )
                    }
                  </>
                )}
            </Field>
            <button type="submit">Search</button>
           
          </SearchForm>
        )}
      />
      <ResetBtn onClick={() => { 
        setSearchedRecipes([]);
        setNoSearchFound(false)
      }}>
        Reset
      </ResetBtn>
    </FormWrapper>  
    )
}


export default SearchRecipeForm

