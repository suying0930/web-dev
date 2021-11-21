import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {
    const isActive = (active, path) => `list-group-item override-font ${active === path ? 'active' : ''}`
    return (
        <>
            <div className="list-group">
                <Link to="/a8/" className="list-group-item override-font" href='#'>
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/a8/twitter/home" className={isActive(active, 'home')}
                   href="../HomeScreen/home.html">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/a8/twitter/explore" className={isActive(active, 'explore')}
                   href="../ExploreScreen/explore.html">
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <Link to="#" className={isActive(active, 'notifications')}
                   href="notifications.html">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>
                <Link to="#" className={isActive(active, 'messages')}
                   href="messages.html">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </Link>
                <Link to="#" className={isActive(active, 'bookmarks')}
                   href="bookmarks.html">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>
                <Link to="#" className={isActive(active, 'lists')}
                   href="lists.html">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>
                <Link to="/a8/twitter/profile" className={isActive(active, 'profile')}
                      href="../../twitter/profile/profile.html">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <Link to="#" className={isActive(active, 'more')}
                   href="more.html">
                    <span className="fa-stack wd-fa-sm">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="d-none d-xl-inline">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
        </>
    )
}

export default NavigationSidebar;

