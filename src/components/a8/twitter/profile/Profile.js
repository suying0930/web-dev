// import React, {useEffect} from "react";
import React from "react";
// import {useDispatch, useSelector} from "react-redux";
import {useSelector} from "react-redux";
import ProfileElement from "./ProfileElement";
// import {getCurrentProfile} from "../../../../services/profileService";

const selectOwner = (state) => state.tweets.profile;

const Profile = (people) => {
    const profile = useSelector(selectOwner);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), [])
    return (
        <>
            <ProfileElement people={people}/>
        </>
    )
};

export default Profile;