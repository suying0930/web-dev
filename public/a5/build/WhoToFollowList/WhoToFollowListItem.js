const whoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item override-follow">
            <div class="row">
                <div class="col-xxl-2 col-xl-3 col-lg-3 d-flex justify-content-center">
                    <img src=${who.avatarIcon} class="img-fluid rounded-circle">
                </div>
                <div class="col-xxl-7 col-xl-5 col-lg-5 wd-suggested-title fw-bold override-follow-name">
                    ${who.userName}
                    <span>
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <div class="fw-normal">
                        ${who.handle}
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-4">
                    <button type="submit" class="btn btn-primary btn-block rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default whoToFollowListItem;
