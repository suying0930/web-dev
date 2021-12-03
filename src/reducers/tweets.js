import posts from './data/tweets.json';

const initialState = {
    tweets: posts
}

const tweets = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            })
        case 'create-tweet':
            const newTweet = {
                _id: (new Date()).getTime() + '',
                tweet: "This is a new Tweet!",
                topic: "Web Development",
                userName: "ReactJS",
                verified: false,
                handle: "ReactJS",
                time: "2h",
                'avatar-image': "/images/react-blue.png",
                'logo-image': "/images/react-blue.png",
                liked: false,
                stats: {
                    comments: 123,
                    retweets: 234,
                    likes: 345
                },
                ...action.tweet,
            };
            return ({
                tweets: [
                    newTweet,
                    ...state.tweets,
                ]
            });
        default:
            return(state);
    }
};

export default tweets;