// const PROFILE_API = 'http://localhost:4000/api/profile';
const PROFILE_API = 'https://boiling-shelf-43750.herokuapp.com/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-current-profile',
                profile: profile,
            })
        );

export const updateProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile => dispatch({
            type: 'update-profile',
            profile: profile,
        }));