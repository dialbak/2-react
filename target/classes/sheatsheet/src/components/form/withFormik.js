import React from 'react';
import ReactDom from 'react-dom';
import * as Yup from 'yup';
import { withFormik, Form, Field, ErrorMessage } from 'formik';

const ComposantInput = ({
                            field,
                            form: { touched, errors },
                            ...props
                        }) => (
    <div className="form-group w-50">
        <label> { props.label } </label>
        <input className={(errors[field.name] && touched[field.name]) ? "is-invalid form-control" : "form-control"} type="text" {...props} {...field} />
    </div>
);


const WithFormik = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;
    return (
        <Form className='m-2'>
            <Field name="email" type="email" component={ComposantInput} />
            <div>
                <ErrorMessage name="email" />
            </div>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Réinitialiser
            </button>
            <button type="submit" className="ml-2 btn btn-primary" disabled={isSubmitting}>
                Envoyer
            </button>
        </Form>
    );
};

const FormikEnhancer = withFormik({
    mapPropsToValues: props => ({ email: '' }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Adresse email invalide')
            .required('Email obligatoire'),
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'MonForm'
})(WithFormik);


export default FormikEnhancer
