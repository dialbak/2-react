import React, {Component} from 'react';
import fakeAuth from "./fakeAuth";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { redirectToReferrer: false };
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/home" } };

        if (this.state.redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>
                    Vous devez être connecté pour accèder à l'espace utilisateur sur{" "}
                    {from.pathname}
                </p>
                <button className={"btn btn-success"} onClick={this.login}>Connexion</button>
            </div>
        );
    }
}

export default Login;
