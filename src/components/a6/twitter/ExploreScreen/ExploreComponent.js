import React from "react";
import PostSummaryList from "../../Build/PostSummaryList/PostSummaryList";
import "./explore.css";

const ExploreComponent = ({post}) => {
    return(
        <>
            <div className="row">
                <div className="col-11 form-group has-search">
                    <span className="fa fa-search form-control-feedback font-darker-gray"></span>
                    <input type="search" id="searchTwitter" placeholder="Search Twitter" className="form-control border-0 rounded-pill wd-input-search input-text" aria-label="Search"
                   aria-describedby="search-addon" />
                    <label className="form-label" for="searchTwitter"></label>
                </div>

                <div className="col-1 d-flex justify-content-center">
                    <button type="button"
                            className="btn btn-outline-primary wd-btn-custom-search justify-content-center">
                        <i className="fas fa-cog fa-2x img-fluid"></i>
                    </button>
                </div>
            </div>

            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link nav-tabs active order-0" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href=" news.html">News</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href=" sports.html">Sports</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link d-none d-sm-inline-block" href=" entertainment.html">Entertainment</a>
                </li>
           </ul>

            <div className="card bg-inverse override-bg">
                <img className="card-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     alt="Card image cap"/>
                    <div className="card-img-overlay wd-text-pos d-flex align-items-end">
                        SpaceX's Starship
                    </div>
            </div>

           <div>
                {<PostSummaryList post={post}/>}
           </div>
       </>
    );
}
export default ExploreComponent;
