import React from 'react';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

const ListItemLink = ({to, name, ...rest}) => (
    <Route
        path={to}
        children={() => (
            <li className={"nav-item"}>
                <NavLink
                    to={to}
                    {...rest}
                    activeClassName={"active"}
                    className={"nav-link"}>
                    {name}
                </NavLink>
            </li>
        )}
    >
    </Route>
)

export default ListItemLink;
