const Profile = () => {
    return (
        <div>
            <a href="navigation.html">
                Back
            </a>

            <h1>Twitter</h1>
            <h2>Profile</h2>

            <img height="200px" width="100%" src="../../../../../public/assets/profileImage.png"/>
            <img height="48px" width="48px" src="../../../../../public/assets/headshot.JPG"/>
            <a href="edit-profile.html">
                Edit profile
            </a>

            <h2>WebDev</h2>
            @WebDev
            <p>
                Workout, food lover. Love spicy food and life.
            </p>

            <p>
                Joined September 2021
            </p>

            <p>
                <b>
                    123
                </b>
                Following
                <b>
                    234
                </b>
                Followers
            </p>

            <ul>
                <li>
                    <a href="tweet.html">
                        Tweets
                    </a>
                </li>
                <li>
                    <a href="tweets-and-replies.html">
                        Tweets & replies
                    </a>
                </li>
                <li>
                    <a href="media.html">
                        Media
                    </a>
                </li>
                <li>
                    <a href="likes.html">
                        Likes
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Profile;