import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

const faTimes = {
    position: 'absolute',
    top:'40px',
    right:'-20px',
    color:'red',
    cursor: 'pointer',
    display : 'inline-block'
}

const ComposantErreur = props => (
    typeof props.children === 'string' && props.children.length > 1 &&
    <div className="text-danger pb-2">{props.children}</div>
);

const ComposantInput = ({
                            field,
                            form: { touched, errors },
                            ...props
                        }) => (
    <div className="form-group">
        <label> { props.label } </label>
        <input className={(errors[field.name] && touched[field.name]) ? "is-invalid form-control" : "form-control"} type="text" {...props} {...field} />
    </div>
);

const ComposantInputArray = ({
                                 field,
                                 form: { touched, errors },
                                 remove,
                                 ...props
                             }) => (
    <div className="form-group" style={{position: 'relative'}}>
        <label> { props.label } </label>
        <input className={Array.isArray(errors.activities) && errors.activities[props.index] && touched.activities && touched.activities[props.index] ? "is-invalid form-control" : "form-control"} type="text" {...props} {...field} />
        <span className="fa fa-times" style={faTimes} onClick={() => remove()}></span>
    </div>
);


class FieldArrayComp extends React.Component {

    submit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
            actions.isSubmitting = false;
            actions.resetForm();
        }, 1000);
    }

    userSchema = Yup.object().shape({
        name: Yup.string('String').min(3, 'Trop court').max(20, 'Trop long').required('Requis'),
        email: Yup.string().email("L'email doit être valide"),
        password: Yup.string().min(5, 'Trop court'),
        activities: Yup.array()
            .of(
                Yup.string()
                    .min(4, 'Activité trop courte')
            )
            .required('Vous devez préciser des activités')
            .min(3, 'Vous devez préciser au moins 3 activités')
    });

    render() {
        return (
            <div className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center">
                <Formik
                    onSubmit={this.submit}
                    initialValues={{name: '', email: '', password: '', activities: []}}
                    validationSchema={this.userSchema}
                >
                    {({values,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          errors,
                          touched}) => (
                        <form onSubmit={ handleSubmit } className="bg-white border p-5 d-flex flex-column">
                            <pre>Erreurs du formulaire : {JSON.stringify(errors, null, 2)}</pre>
                            <Field name="name" label="Prénom" component={ComposantInput} />
                            <ErrorMessage name="name" component={ComposantErreur} />
                            <Field name="email" label="Email" type="email" component={ComposantInput} />
                            <ErrorMessage name="email" component={ComposantErreur} />
                            <Field name="password" label="Mot de passe" component={ComposantInput} />
                            <ErrorMessage name="password" component={ComposantErreur} />
                            <FieldArray name="activities">
                                {({ push, remove }) => {
                                    return (
                                        <div>
                                            { values.activities.map((activity, index) => (
                                                <div key={index}>
                                                    <Field remove={() => remove(index)} name={`activities.${index}`}
                                                           label={`Activité ${index+1}`} component={ComposantInputArray} index={index} />
                                                    <ErrorMessage name={`activities.${index}`} component={ComposantErreur} />
                                                </div>
                                            ))}
                                            <ErrorMessage name="activities" component={ComposantErreur} />
                                            <button type="button"  className="btn btn- btn-success"
                                                    onClick={() => push('')}>
                                                Ajouter une activité
                                            </button>
                                            <hr/>
                                        </div>
                                    );
                                }}
                            </FieldArray>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                Envoyer
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default FieldArrayComp
