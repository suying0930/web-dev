const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item override-bg">
            <div class="row">
                <div class="col-9 wd-suggested-area">
                    ${post.topic}
                    <div class="col-xxl-10 wd-suggested-title override-title fw-bold">
                        ${post.userName}
                        <span>
                            <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-muted fw-normal">
                            - ${post.time}
                        </span>
                        <div class="wd-suggested-title">
                            ${post.title}
                        </div>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <img src=${post.image} class="img-fluid wd-post-image">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;