import React, {Component} from 'react'
import {Formik} from "formik"
import ActionValidationsError from "./actionValidationsError.js";
import YupComp from "./yupComp";
import FieldComp from "./fieldComp";
import FieldArrayComp from "./fieldArray";
import FormikEnhancer from "./withFormik";


class FormikComp extends Component {

    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                <p>Simple example</p>
                <Formik onSubmit={this.submit} initialValues={{name: "", email: "", password: ""}}>
                    {
                        ({
                             values,
                             handleBlur,
                             handleChange,
                             handleSubmit,
                             isSubmitting
                         }) => (
                            <form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Adresse email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mot de passe</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Envoyer
                                </button>
                            </form>
                        )
                    }
                </Formik>
                <br/>
                <div>
                    <p>Action Validations Error </p>
                    <ActionValidationsError/>
                </div>
                <div>
                    <p>Yup </p>
                    <YupComp/>
                </div>
                <div>
                    <p>Field </p>
                    <FieldComp/>
                </div> <div>
                    <p>Field Array</p>
                    <FieldArrayComp/>
                </div>
                <div>
                    <p>With formik </p>
                    <FormikEnhancer/>
                </div>
            </div>
        );
    }
}

export default FormikComp;
