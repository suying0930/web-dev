import React from "react";
import './profile.css';

const EditProfile = (
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
    }
) => {
    return (
        <div className="wd-margin-top">
            <div className="row">
                <div className="col-1">
                    <a href="../twitter/profile">
                        <i className="fa fa-remove wd-remove-color"></i>
                    </a>
                </div>

                <div className="col-8">
                    <h5>
                        Edit profile
                    </h5>
                </div>
                <div className="col-3">
                    <button className="rounded-pill float-end btn btn-primary bg-white wd-save-color">Save</button>
                </div>
            </div>

            <div className="wd-margin-top">
                <img height="200px" width="100%" src={profile.bannerPicture}/>
            </div>
            <img src={profile.profilePicture} className="wd-profile-picture rounded-circle"/>

            <div className="form-group has-search wd-edit-name">
                <div className="form-control-feedback wd-section-name">Name</div>
                <textarea id="edit-name"
                          className="form-control border border-light input-text" aria-label="Name"
                          aria-describedby="name-addon"/>
                <label className="form-label" htmlFor="edit-name"></label>
            </div>

            <div className="form-group has-search wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Bio</div>
                <textarea id="edit-bio"
                          className="form-control border border-light border-light input-text" aria-label="Bio"
                          aria-describedby="bio-addon"/>
                <label className="form-label" htmlFor="edit-bio"></label>
            </div>

            <div className="form-group has-search wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Location</div>
                <textarea id="edit-location"
                          className="form-control border border-light input-text" aria-label="Location"
                          aria-describedby="location-addon"/>
                <label className="form-label" htmlFor="edit-location"></label>
            </div>

            <div className="form-group has-search wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Website</div>
                <textarea id="edit-website"
                          className="form-control border border-light input-text" aria-label="Website"
                          aria-describedby="website-addon"/>
                <label className="form-label" htmlFor="edit-website"></label>
            </div>

            <div>
                <div>
                    Birth date
                    <span className="wd-birth-date">
                        · <button type="reset" className="wd-edit-born-date">
                            Edit
                        </button>
                        <label htmlFor="edit-birth-date"></label>
                    </span>
                </div>
                <input id="edit-birth-date" type="date"/>
            </div>
        </div>
    )
}

export default EditProfile;