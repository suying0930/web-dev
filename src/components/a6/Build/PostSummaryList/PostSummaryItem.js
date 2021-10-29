import React from "react";
import "./post-summary-list.css";

const PostSummaryItem = (
    {
        post = {
            topic: 'Web Development',
            userName: 'ReactJS',
            time: '2h',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            image: '/images/react-blue.png'
        }
    }) => {
        return (
            <li className="list-group-item override-bg">
                <div className="row">
                    <div className="col-9 wd-suggested-area">
                        {post.topic}
                        <div className="col-xxl-10 wd-suggested-title override-title fw-bold">
                            {post.userName}
                            <span>
                                <i className="fas fa-check-circle"></i>
                            </span>
                            <span className="text-muted fw-normal">
                                - {post.time}
                            </span>
                            <div className="wd-suggested-title">
                                {post.title}
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <img alt={`${post.userName}-logo`}src={post.image} className="img-fluid wd-post-image"/>
                    </div>
                </div>
            </li>
        );
}

export default PostSummaryItem;