import React from "react";
import {useSelector} from "react-redux";
import ProfileElement from "./ProfileElement";

const selectOwner = (state) => state.tweets.profile;

const Profile = (people) => {
    const profile = useSelector(selectOwner);
    return (
        <>
            <ProfileElement people={people}/>
        </>
    )
};

export default Profile;