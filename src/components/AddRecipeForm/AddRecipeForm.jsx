import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { addRecipe } from '../../actions/AddRecipe'
import { useDispatch } from 'react-redux'


const AddRecipeForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ 
                name: "",
                description: "",
                difficulty: "",
                serves: "",
                prepTime: "",
                cookingTime: "",
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                .required("Recipe name is required")
            })}
            onSubmit={values => {

                const recipe = {
                    name: values.name,
                    difficulty: values.difficulty,
                    description: values.description,
                    serves: values.serves,
                    prepTime: values.preptime, 
                    cookingTime: values.cookingtime
                }

                // Call Action to submit Form Data --
                dispatch(addRecipe(recipe))
            }}
        >
        {props => {
          const {
            // values,
            touched,
            errors,
            dirty,
            isSubmitting,
            // handleChange,
            // handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" style={{ display: "block" }}>
                    Recipe Name
                    </label>
                    <Field
                        id="name"
                        placeholder="Enter Recipe Name"
                        name="name"
                        type="text"
                        className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                </div>

                <div>
                    <label htmlFor="description" style={{ display: "block" }}>
                    Instructions on how to make
                    </label>
                    <Field
                        id="description"
                        placeholder="Enter Instructions on how to make"
                        name="description"
                        type="text"
                        className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                </div>
                
                <div>
                    <label htmlFor="difficulty" style={{ display: "block" }}>
                    Difficulty
                    </label>
                    <Field
                        id="difficulty"
                        placeholder="Easy, Medium or Hard"
                        name="difficulty"
                        type="text"
                        className={'form-control' + (errors.difficulty && touched.difficulty ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="difficulty" component="div" className="invalid-feedback" />
                </div>

                <div>
                    <label htmlFor="prepTime" style={{ display: "block" }}>
                        Prep Time
                    </label>
                    <Field
                        id="prepTime"
                        placeholder="Add a number of mins - 5"
                        name="prepTime"
                        type="text"
                        className={'form-control' + (errors.prepTime && touched.prepTime ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="prepTime" component="div" className="invalid-feedback" />
                </div>

                <div>
                    <label htmlFor="cookingTime" style={{ display: "block" }}>
                        Cooking Time
                    </label>
                    <Field
                        id="cookingTime"
                        placeholder="Add a number of mins - 5"
                        name="cookingTime"
                        type="text"
                        className={'form-control' + (errors.cookingTime && touched.cookingTime ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="cookingTime" component="div" className="invalid-feedback" />
                </div>

                <div>
                    <label htmlFor="serves" style={{ display: "block" }}>
                        Serves
                    </label>
                    <Field
                        id="serves"
                        placeholder="Add a number"
                        name="serves"
                        type="text"
                        className={'form-control' + (errors.serves && touched.serves ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="serves" component="div" className="invalid-feedback" />
                </div>

                <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >Reset</button>

                <button type="submit" disabled={isSubmitting}>
                Add Recipe
                </button>
            </Form>
          );
        }}
      </Formik>
    )
}

export default AddRecipeForm
