import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
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

export default HomeScreen;