import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Practice as A6_PRACTICE} from "./components/a6/Practice";
import {Practice as A7_PRACTICE} from "./components/a7/Practice";
import {Practice as A8_PRACTICE} from "./components/a8/Practice";
import {Build as A6_BUILD} from "./components/a6/Build";
import {Build as A7_BUILD} from "./components/a7/Build";
import {Build as A8_BUILD} from "./components/a8/Build";
import './App.css';
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import {HelloWorld as A6_HELLOWORLD} from "./components/a6/HelloWorld";
import {HelloWorld as A7_HELLOWORLD} from "./components/a7/HelloWorld";
import {HelloWorld as A8_HELLOWORLD} from "./components/a8/HelloWorld";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";

const reducer = combineReducers({tweets, who, profile})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Link to="/a6/practice">A6</Link> |
                    <Link to="/a7/practice">A7</Link> |
                    <Link to="/a8/practice">A8</Link>

                    <Route path="/a6">
                        <A6/>
                    </Route>
                    <Route path="/a6/hello" exact={true}>
                        <A6_HELLOWORLD/>
                    </Route>
                    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                        <A6_PRACTICE/>
                    </Route>
                    <Route path="/a6/twitter">
                        <A6_BUILD/>
                    </Route>

                    <Route path="/a7">
                        <A7/>
                    </Route>
                    <Route path="/a7/hello" exact={true}>
                        <A7_HELLOWORLD/>
                    </Route>
                    <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                        <A7_PRACTICE/>
                    </Route>
                    <Route path="/a7/twitter">
                        <A7_BUILD/>
                    </Route>

                    <Route path="/a8">
                        <A8/>
                    </Route>
                    <Route path="/a8/hello" exact={true}>
                        <A8_HELLOWORLD/>
                    </Route>
                    <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                        <A8_PRACTICE/>
                    </Route>
                    <Route path="/a8/twitter">
                        <A8_BUILD/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
