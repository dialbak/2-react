import React, {Component} from 'react'
import ListItemLink from "./listItemLink";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ShowTheLocationWithRouter from "./showTheLocationWithRouter";
import User from "./user";

class AppRouterQueryParam extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="nav nav-pills nav-fill">
                            <ListItemLink to="/user/bob" name="Bob"/>
                            <ListItemLink to="/user/jean" name="Jean"/>
                            <ListItemLink to="/user/paul" name="Paul"/>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/user/:id" component={User}/>
                        <Route path="/" render={() => <div><h3>Sélectionnez un utilisateur</h3></div>}/>
                        <Redirect to="/"/>
                    </Switch>
                    <ShowTheLocationWithRouter/>
                </div>

            </Router>
        );
    }
}

export default AppRouterQueryParam;
