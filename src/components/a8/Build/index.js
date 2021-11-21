import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
import HomeScreen from "../twitter/HomeScreen/HomeScreen";
import ProfileScreen from "../twitter/profile/ProfileScreen";
import EditProfile from "../twitter/profile/EditProfile";

export const Build = () => {
    return (
            <div>
                <Route path={["/", "/a8/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a8/twitter/profile"
                       exact={true} component={ProfileScreen}/>
                <Route path="/a8/twitter/edit-profile"
                       exact={true} component={EditProfile}/>
            </div>
    )
};

export default Build;