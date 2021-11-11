import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
import HomeScreen from "../twitter/HomeScreen/HomeScreen";
import ProfileScreen from "../twitter/profile/ProfileScreen";
import EditProfile from "../twitter/profile/EditProfile";

const Build = () => {
    return (
            <div>
                <Route path={["/", "/a7/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a7/twitter/profile"
                       exact={true} component={ProfileScreen}/>
                <Route path="/a7/twitter/edit-profile"
                       exact={true} component={EditProfile}/>
            </div>
    )
};

export default Build;