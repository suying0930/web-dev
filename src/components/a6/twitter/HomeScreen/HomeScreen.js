import React from "react";
import NavigationSidebar from "../../Build/NavigationSidebar/NavigationSidebar";
import PostList from "../../Build/PostList/PostList";
import PostSummaryList from "../../Build/PostSummaryList/PostSummaryList";

const HomeScreen = () => {
    return(
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-8 col-10">
                    <PostList />
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-inline">
                    <PostSummaryList />
                </div>
            </div>
        )
};

export default HomeScreen;