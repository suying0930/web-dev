import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/tweetService";

const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    console.log(tweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;
