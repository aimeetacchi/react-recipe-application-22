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
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                .required("Recipe name is required")
            })}
            onSubmit={values => {

                const recipe = {
                    name: values.name,
                    difficulty: values.difficulty,
                    description: values.description
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
                    Name
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
                    Description
                    </label>
                    <Field
                        id="description"
                        placeholder="Enter Recipe Desciption"
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
