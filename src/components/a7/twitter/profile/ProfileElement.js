import React from "react";
import "./profile.css"

const ProfileElement = (
    {
        profile = {
            name: 'Susie Liu',
            handle: 'suying',
            profilePicture: '../../../../../assets/headshot.JPG',
            bannerPicture: '../../../../../assets/profileImage.png',
            bio: 'Workout, food lover. Love spicy food and life.',
            website: 'github.com/suying0930/web-dev',
            location: 'San Jose, CA',
            dateOfBirth: '7/7/2001',
            dateJoined: '09/2017',
            followingCount: '312',
            followersCount: '180',
        }
    }) => {
    return(
        <div>
            <div className="row">
                <div className="col-2 wd-profile-shift">
                    <a href="../twitter/home">
                        <i className="fas fa-long-arrow-alt-left fa-2x wd-remove-color img-fluid align-content-center"></i>
                    </a>
                </div>

                <div className="col-10">
                    <h5>
                        {profile.name}
                    </h5>
                    <div className="text-muted">
                        8,888 Tweets
                    </div>
                </div>
            </div>

            <div>
                <img height="200px" width="100%" src={profile.bannerPicture}/>
                <div className="row">
                    <div className="col-9">
                        <img src={profile.profilePicture} className="wd-profile-picture rounded-circle"/>
                    </div>
                    <div className="col-3">
                        <a href="edit-profile"
                           className="btn btn-outline-primary btn-block rounded-pill float-end wd-edit-profile-color">
                            Edit profile
                        </a>
                    </div>
                </div>
            </div>

            <div className="wd-name-margin-top">
                <h5 className="wd-name-margin-bottom">
                    {profile.name}
                </h5>
                <div className="text-muted">
                    @{profile.handle}
                </div>
            </div>

            <div className="wd-margin-top">
                {profile.bio}
            </div>
            <div>
                <a href={profile.website}>Personal Website</a>
            </div>
            <div className="row mt-2 text-muted">
                <div className="col">
                    <i className="fas fa-map-marker-alt"></i>
                    {profile.location}
                </div>
                <div className="col">
                    <i className="fas fa-birthday-cake"></i>
                    Born {profile.dateOfBirth}
                </div>
                <div className="col">
                    <i className="fas fa-calendar-alt"></i>
                    Joined {profile.dateJoined}
                </div>
            </div>

            <div className="row wd-margin-top wd-margin-bottom">
                <div className="col-3 fw-bold">
                    {profile.followingCount}
                    <span className="fw-normal text-muted">
                        Following
                    </span>
                </div>

                <div className="col-9 fw-bold">
                    {profile.followersCount}
                    <span className="fw-normal text-muted">
                        Followers
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileElement;