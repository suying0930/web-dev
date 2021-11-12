import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Practice as A6_Practice} from "./components/a6/Practice";
import {Practice as A7_Practice} from "./components/a7/Practice";
import {Build as A6_Build} from "./components/a6/Build";
import {Build as A7_Build} from "./components/a7/Build";
import './App.css';
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import {HelloWorld as A6_HelloWorld} from "./components/a6/HelloWorld";
import {HelloWorld as A7_HelloWorld} from "./components/a7/HelloWorld";
import A6 from "./components/a6";
import A7 from "./components/a7";

const reducer = combineReducers({tweets, who, profile})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Link to="/a6/practice">A6</Link> |
                    <Link to="/a7/practice">A7</Link>

                    <Route path="/a6">
                        <A6/>
                    </Route>
                    <Route path="/a6/hello" exact={true}>
                        <A6_HelloWorld/>
                    </Route>
                    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                        <A6_Practice/>
                    </Route>
                    <Route path="/a6/twitter">
                        <A6_Build/>
                    </Route>

                    <Route path="/a7">
                        <A7/>
                    </Route>
                    <Route path="/a7/hello" exact={true}>
                        <A7_HelloWorld/>
                    </Route>
                    <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                        <A7_Practice/>
                    </Route>
                    <Route path="/a7/twitter">
                        <A7_Build/>
                    </Route>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
