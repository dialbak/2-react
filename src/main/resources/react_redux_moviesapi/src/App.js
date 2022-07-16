import React, {Component} from "react";
import {Header} from "./components";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Loadable from "react-loadable";
import {connect} from "react-redux";
import {fetchFavoris} from "./store/actions";

const LazyFilms = Loadable({
    loader: () => import("./features/films"),
    loading: () => <h1>Loading ...</h1>
});

const LazyFavoris = Loadable({
    loader: () => import("./features/favoris"),
    loading: () => <h1>Loading ...</h1>
});

class App extends Component {

    /**
     * this is the first method call wehn the component is mount
     * here i make a a requets to get the movies list from api
     */
    componentDidMount() {
        this.props.fetchFavoris();
    }

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header/>
                {/*Switch displays the first Route component that matches the URL, if not Redirect to Films*/}
                <Switch>
                    <Route path="/films" component={LazyFilms}/>
                    <Route path="/favoris" component={LazyFavoris}/>
                    <Redirect to="/films"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(
    connect(null, {
        fetchFavoris
    })(App)
);
