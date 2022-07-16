import React from 'react';
import {Redirect, Route} from "react-router-dom"
import fakeAuth from "./fakeAuth"

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;
