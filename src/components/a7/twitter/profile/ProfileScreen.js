import NavigationSidebar from "../../Build/NavigationSidebar/NavigationSidebar";
import WhatsHappening from "../../Build/WhatsHappening";
import TweetList from "../../Build/TweetList";
import PostSummaryList from "../../Build/PostSummaryList/PostSummaryList";
import React from "react";

const ProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-8 col-10">
                style={{"position": "relative"}}>
                <WhatsHappening/>
                <TweetList/>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-inline">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    )
};

export default ProfileScreen;