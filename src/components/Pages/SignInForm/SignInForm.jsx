import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
// import { signIn } from '../../../actions/SignIn'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components';

const SignInForm = (props) => {
    const {signIn} = props;
    // const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ 
                email: "",
                password: "",
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                .required("email is required"),
                password: Yup.string()
                .required("password is required")
            })}
            onSubmit={values => {

                const credentials = {
                    email: values.email,
                    password: values.password,
                }

                console.log(credentials)

                // Call Action to submit Form Data --
                signIn(credentials);
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
            <FormGridStyle>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" style={{ display: "block" }}>
                        email
                        </label>
                        <Field
                            id="email"
                            placeholder="email"
                            name="email"
                            type="text"
                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>

                    <div>
                        <label htmlFor="password" style={{ display: "block" }}>
                        Password
                        </label>
                        <Field
                            id="password"
                            placeholder="password"
                            name="password"
                            type="password"
                            className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="description" component="div" className="invalid-feedback" />
                    </div>

                    <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset</button>

                    <button type="submit" disabled={isSubmitting}>Sign in</button>
                </Form>
            </FormGridStyle>
          );
        }}
      </Formik>
    )
}


const FormGridStyle = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 30px 0;
`;

export default withAuthenticator(SignInForm)
