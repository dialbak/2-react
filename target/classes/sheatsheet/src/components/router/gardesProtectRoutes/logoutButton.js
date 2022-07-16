import React from 'react'
import {Link} from "react-router-dom"
import {withRouter} from "react-router";
import fakeAuth from "./fakeAuth";

const LogoutButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated && (
            <li
                className="nav-item pl-3"
                onClick={() => {
                    fakeAuth.signout();
                }}
            >
                <Link className="nav-link" exact="true" to="/home">
                    Déconnexion
                </Link>
            </li>
        )
);

export default LogoutButton;
