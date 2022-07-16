import React, {Component} from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import './App.css'
import {
    AxiosRequest,
    ClickEventBindingThis,
    ComposeSeveralComponents,
    ConditionalRendering,
    Form,
    Fragment,
    FromChildToParent,
    Header,
    IndexRouter,
    Login,
    MapListRemove,
    PropsClassComponent,
    PropsFunctionalComponent,
    Receptor,
    Ref,
    RenderChild,
    RenderHoc,
    RenderProps,
    StateClassComponent,
    This,
    UserProfile
} from "./components"

class Basics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <PropsFunctionalComponent name={"dial bak"}/><br/>
                <PropsClassComponent name={"dial bak"}/><br/>
                <ComposeSeveralComponents/> <br/>
                <StateClassComponent name={"dial bak"}/>
                <ClickEventBindingThis/>
                <This/>
                <FromChildToParent/>
                <Ref/>
                <ConditionalRendering/>
                <Login/>
                <MapListRemove/>
                <Receptor/>
                <Fragment/>
                <Header/>
                <UserProfile/>
                <RenderChild><Child/></RenderChild>
                <div>
                    <button onClick={() => this.setState(state => ({show: !state.show}))}>
                        Click twice to reload...
                    </button>
                    <div>
                        {this.state.show && <RenderHoc/>}
                    </div>
                </div>
                <RenderProps/>
            </div>

        )
    }
}

const Child = () => <div> child comp</div>

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul className={"nav"}>
                            <li><Link className={"btn btn-outline-primary"} to={"/"}>Basics</Link></li>
                            <li><Link className={"btn btn-outline-primary"} to={"/form"}>form</Link></li>
                            <li><Link className={"btn btn-outline-primary"} to={"/http"}>http</Link></li>
                            <li><Link className={"btn btn-outline-primary"} to={"/router"}>router</Link></li>
                            <li><Link className={"btn btn-outline-primary"} to={"/router"}>router</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Route exact path={"/"} component={Basics}/>
                        <Route exact path={"/form"} component={Form}/>
                        <Route exact path={"/http"} component={AxiosRequest}/>
                        <Route exact path={"/router"} component={IndexRouter}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
