import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
import LogoutButton from "./logoutButton"
import ProtectedRoute from "./protectedRoute"
import Start from "./start"
import Home from "./home"
import Login from "./login"
import UserAccount from "./userAccount"

const AuthExample = () => (
    <Router>
        <div>
            <ul className="nav nav-pills p-3">
                <li>
                    <NavLink className="nav-link" to="/home">
                        Page d'accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/account">
                        Mon compte
                    </NavLink>
                </li>
                <LogoutButton />
            </ul>

            <Route path="/" exact component={Start} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/account" component={UserAccount} />
        </div>
    </Router>
)

export default AuthExample;
