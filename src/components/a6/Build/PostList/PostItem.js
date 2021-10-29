import React from "react";

const PostItem = (
    {
        post = {
            avatar: '/images/elonmusk.jpg',
            userName: 'Elon Musk',
            handler: '@elonmust',
            time: '23h',
            tweet: 'Amazing show about @Inspiration4x mission!',
            image: '/images/inspiration.jpg',
            title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            content: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
            comment: '4.2k',
            retweet: '3.5k',
            likes: '37.5k'
        }
    }) => {
        return (
            <div className="row wd-post-container">
                <div className="col-1">
                    <img alt={`${post.userName}-avatar`} src={post.avatar} className="wd-avatar-image"/>
                </div>
                <div className="col-11">
                    <div className="wd-post">
                        {post.userName}
                        <span>
                            <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="text-muted">
                            {post.handler} · {post.time}
                        </span>
                    <div className="wd-post-main-content">
                        {post.tweet}
                    </div>

                    <div className="card wd-post-image-container">
                        <img alt={`${post.title}-title`} src={post.image} className="card-img"/>
                        <div className="wd-post-title">
                            {post.title}
                        </div>
                        <div className="text-muted">
                            {post.content}
                        </div>
                    </div>
                </div>
                    <div className="wd-post-user-interaction">
                        <a href="#" className="wd-post-user-interaction item">
                            <i className="far fa-comment wd-post-user-interaction-item text-muted"></i>
                            <span className="wd-post-number-space text-muted">
                                {post.comment}
                            </span>
                        </a>
                        <a href="#" className="wd-post-user-interaction item">
                            <i className="fas fa-retweet wd-post-user-interaction-item text-muted"></i>
                            <span className="wd-post-number-space text-muted">
                                {post.retweet}
                            </span>
                        </a>
                        <a href="#" className="wd-post-user-interaction item">
                            <i className="far fa-heart wd-post-user-interaction-item-liked text-muted"></i>
                            <span className="wd-post-number-space wd-post-user-interaction-item-liked text-muted">
                                {post.likes}
                            </span>
                        </a>
                        <a href="#" className="wd-post-user-interaction item">
                            <i className="fas fa-external-link-alt wd-post-user-interaction-item text-muted"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default PostItem;