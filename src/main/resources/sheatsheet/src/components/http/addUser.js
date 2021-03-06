import React, {Component} from 'react'
import {Field, Formik} from 'formik'
import './conf/axios-conf'
import axios from 'axios'

class AddUser extends Component {
    getInitialValues = () => {
        return this.props.user ? {...this.props.user} : {name: '', username: '', email: ''}
    }

    submit = (values, actions) => {
        if (!this.props.user) {
            axios.post('/users', values)
                .then(response => {
                    console.log(response)
                })
        } else {
            axios.put(`/users/${values.id}`, values)
                .then(response => {
                    console.log(response)
                })
        }
    }

    render() {
        return (
            <Formik
                initialValues={this.getInitialValues()}
                onSubmit={this.submit}
                enableReinitialize={true}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        <Field name="name" placeholder="name"/>
                        <Field name="username" placeholder="username"/>
                        <Field name="email" placeholder="email"/>
                        <button type="submit">save</button>
                    </form>
                )}
            </Formik>
        )
    }
}

export default AddUser;
