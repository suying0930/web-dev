import React from "react";
import './who-to-follow.css';

const whoToFollowListItem = (
    {
        who = {
            avatarIcon: '/images/nasa.png',
            userName: 'NASA',
            handle: 'NASA'
        }
    }) => {
        return(
            <li className="list-group-item override-follow">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-flex justify-content-center">
                        <img alt={`${who.userName}-avatar`} src={who.avatarIcon} width = "48" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6 wd-suggested-title fw-bold override-follow-name">
                        {who.userName}
                        <span>
                            <i className="fas fa-check-circle"></i>
                        </span>
                        <div className="fw-normal">
                            {who.handle}
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
        );
}

export default whoToFollowListItem;
