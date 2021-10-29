import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import post from "./posts.json"

const PostSummaryList = () => {
    return (
            <ul className="list-group">
                {
                    post.map(post => {
                        return(<PostSummaryItem post={post}/>);
                    })
                }
            </ul>
    );
}

export default PostSummaryList;