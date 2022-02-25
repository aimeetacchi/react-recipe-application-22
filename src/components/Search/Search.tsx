import { Form, Field } from 'react-final-form'

import { SearchForm, SearchFormGroup, SearchFormError, SearchGrid, FormWrapper, ResetBtn } from './styles'

interface SearchRecipeFormProps {
  SearchRecipe: (value: string) => void
  setSearchedRecipes: (value: []) => void
  setNoSearchFound: (value: boolean) => void
}

const SearchRecipeForm = (props : SearchRecipeFormProps) => {

  const {SearchRecipe, setSearchedRecipes, setNoSearchFound } = props;

    const onSubmit = (value: string) => {
      SearchRecipe(value)
    }

    // const validate = (values: string) => {
    //   const errors = {
    //   };
    //   if (!values.search) {
    //     errors.search = "Required";
    //   }
    //   return errors;
    // }

    return (
      <FormWrapper>
        <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, form, submitting, values, /*reset*/ }) => (
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

