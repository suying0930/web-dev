const PostItem = (post) => {
    return (`
        <div class="row wd-post-container">
            <div class="col-1">
                <img src="${post.avatar}" class="wd-avatar-image"/>
            </div>
            <div class="col-11">
                <div class="wd-post">
                    ${post.userName}
                    <span>
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <span class="text-muted">
                        ${post.handler} · ${post.time}
                    </span>
                <div class="wd-post-main-content">
                    ${post.tweet}
                </div>
        
                <div class="card wd-post-image-container">
                    <img src="${post.image}" class="card-img"/>
                    <div class="wd-post-title">
                        ${post.title}
                    </div>
                    <div class="text-muted">
                        ${post.content}
                    </div>
                </div>
            </div>
                <div class="wd-post-user-interaction">
                    <a href="#" class="wd-post-user-interaction item">
                        <i class="far fa-comment wd-post-user-interaction-item text-muted"></i>
                        <span class="wd-post-number-space text-muted">
                            ${post.comment}
                        </span>
                    </a>
                    <a href="#" class="wd-post-user-interaction item">
                        <i class="fas fa-retweet wd-post-user-interaction-item text-muted"></i>
                        <span class="wd-post-number-space text-muted">
                            ${post.retweet}
                        </span>
                    </a>
                    <a href="#" class="wd-post-user-interaction item">
                        <i class="far fa-heart wd-post-user-interaction-item-liked text-muted"></i>
                        <span class="wd-post-number-space wd-post-user-interaction-item-liked text-muted">
                            ${post.likes}
                        </span>
                    </a>
                    <a href="#" class="wd-post-user-interaction item">
                        <i class="fas fa-external-link-alt wd-post-user-interaction-item text-muted"></i>
                    </a>
                </div>
            </div>
        </div>
        
        
    `);
}

export default PostItem;