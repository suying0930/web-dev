import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './profile.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const history = useHistory();

    const [editName, setEditName] = useState(profile.name);
    const [editBio, setEditBio] = useState(profile.bio);
    const [editLocation, setEditLocation] = useState(profile.location);
    const [editWebsite, setEditWebsite] = useState(profile.website);
    const [editBirthDate, setEditBirthDate] = useState(profile.dateOfBirth);
    const [isEditingDate, setIsEditingDate] = useState(false);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setEditName(newName);
    }

    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setEditBio(newBio);
    }

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setEditLocation(newLocation);
    }

    const handleWebsiteChange = (event) => {
        const newWebsite = event.target.value;
        setEditWebsite(newWebsite);
    }

    const handleBirthDateChange = (event) => {
        const newBirthDate = event.target.value;
        setEditBirthDate(newBirthDate);
    }

    const toggleDateEdit = () => {
        setIsEditingDate(!isEditingDate);
    };

    const saveClickHandler = () => {
        console.log('saveClickHandler')
        dispatch({
            type: 'EDIT',
            payload: {
                name: editName,
                bio: editBio,
                location: editLocation,
                website: editWebsite,
                dateOfBirth: editBirthDate,
            },
        });
    }

    return (
        <div className="wd-margin-top">
            <div className="row">
                <div className="col-1">
                    <button onClick={() => history.push('/a7/twitter/profile')}
                            className="wd-remove-color">
                        <i className="fa fa-remove"></i>
                    </button>
                </div>

                <div className="col-8">
                    <h5>
                        Edit profile
                    </h5>
                </div>
                <div className="col-3">
                    <Link to={'/a7/twitter/profile'}>
                        <button className="rounded-pill float-end btn btn-primary bg-white wd-save-color"
                                onClick={saveClickHandler}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="wd-margin-top">
                <img height="200px" width="100%" src={profile.bannerPicture}/>
            </div>
            <img src={profile.profilePicture} className="wd-profile-picture rounded-circle"/>

            <div className="form-group has-update wd-edit-name">
                <div className="form-control-feedback wd-section-name">Name</div>
                <textarea id="edit-name"
                          className="form-control border border-light input-text"
                          aria-label="Name"
                          aria-describedby="name-addon"
                          onChange={handleNameChange}
                          value={editName}/>
                <label className="form-label" htmlFor="edit-name"></label>
            </div>

            <div className="form-group has-update wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Bio</div>
                <textarea id="edit-bio"
                          className="form-control border border-light input-text"
                          aria-label="Bio"
                          aria-describedby="bio-addon"
                          onChange={handleBioChange}
                          value={editBio}/>
                <label className="form-label" htmlFor="edit-bio"></label>
            </div>

            <div className="form-group has-update wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Location</div>
                <textarea id="edit-location"
                          className="form-control border border-light input-text"
                          aria-label="Location"
                          aria-describedby="location-addon"
                          onChange={handleLocationChange}
                          value={editLocation}/>
                <label className="form-label" htmlFor="edit-location"></label>
            </div>

            <div className="form-group has-update wd-edit-profile">
                <div className="form-control-feedback wd-section-name">Website</div>
                <textarea id="edit-website"
                          className="form-control border border-light input-text"
                          aria-label="Website"
                          aria-describedby="website-addon"
                          onChange={handleWebsiteChange}
                          value={editWebsite}/>
                <label className="form-label" htmlFor="edit-website"></label>
            </div>

            <div>
                <div>
                    Birth date
                    <span className="wd-birth-date">
                        ·
                        <button
                            onClick={toggleDateEdit}
                            className="wd-edit-born-date"
                        >
                            Edit
                        </button>
                        <label htmlFor="edit-birth-date"></label>
                    </span>
                </div>
                {isEditingDate &&
                    <input id="edit-birth-date"
                       type="date"
                       onChange={handleBirthDateChange}
                       value={editBirthDate}/>
                }
                {!isEditingDate &&
                    <div>
                        {editBirthDate}
                    </div>
                }
            </div>
        </div>
    )
}

export default EditProfile;