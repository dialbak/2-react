import React from 'react'
import AppRouterQueryParam from "./Params_url_queries/appRouterQueryParam"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import AuthExample from "./gardesProtectRoutes/authExample";
import PrompComp from "./prompt/prompt";
const IndexRouter = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul className={"nav"}>
                        <li><Link className={"btn btn-outline-primary"} to={"/Params_url_queries"}>Params_url_queries</Link></li>
                        <li><Link className={"btn btn-outline-primary"} to={"/Protected_routes"}>Protected_routes</Link></li>
                        <li><Link className={"btn btn-outline-primary"} to={"/prompt"}>Prompt</Link></li>
                    </ul>
                </nav>
                <div>
                    <Route exact path={"/Params_url_queries"} component={AppRouterQueryParam}/>
                    <Route exact path={"/Protected_routes"} component={AuthExample}/>
                    <Route exact path={"/prompt"} component={PrompComp}/>
                </div>
            </div>
        </Router>
    );
}

export default IndexRouter
