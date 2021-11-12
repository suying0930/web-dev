import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
import HomeScreen from "../twitter/HomeScreen/HomeScreen";

export const Build = () => {
    return (
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            <Route path={["/", "/a6/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a6/twitter/explore"
                   exact={true} component={ExploreScreen}/>
        </>
    )
};

export default Build;