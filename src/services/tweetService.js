const TWEET_API = 'http://localhost:4000/api/tweets';
// const TWEET_API = 'https://boiling-shelf-43750.herokuapp.com/api/tweets';

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets => {
                console.log('All tweets:', tweets);
                dispatch({
                    type: 'fetch-all-tweets',
                    tweets
                });
            }
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet => {
                console.log('The new tweet:', tweet);
                dispatch({
                    type: 'create-tweet',
                    tweet
                });
            }
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    })
        .then(response => {
            dispatch({
                type: 'delete-tweet',
                tweet: tweet
            });
            return response.json();
        })
        .then(resolvedResponse => console.log('This is response of deleteTweet:', resolvedResponse));

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            dispatch({
                type: 'like-tweet',
                tweet: tweet
            });
            return response.json();
        })
        .then(resolvedResponse => console.log('This is response of likeTweet:', resolvedResponse));