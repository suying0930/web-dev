import {getCurrProfile, updateProfileById} from "../reducers/profile";
// const PROFILE_API = 'http://localhost:4000/api/profile';
// const PROFILE_API = 'https://boiling-shelf-43750.herokuapp.com/api/profile';

const PROFILE_REST = 'http://localhost:4000/rest/profile';

// export const getCurrentProfile = (dispatch) =>
//     fetch(PROFILE_REST)
//         .then(response => response.json())
//         .then(profile =>
//             dispatch({
//                 type: 'get-current-profile',
//                 profile: profile,
//             })
//         );
//
// export const updateProfile = (dispatch, profile) =>
//     fetch(`${PROFILE_REST}`, {
//         method: 'PUT',
//         body: JSON.stringify(profile),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(profile => dispatch({
//             type: 'update-profile',
//             profile: profile,
//         }));

export const getCurrentProfile = (dispatch) =>
    fetch(`${PROFILE_REST}`)
        .then(response => response.json())
        .then(profiles => {
                // console.log(profiles);
                const profile = profiles[0];
                console.log(profile);
                dispatch({
                    type: getCurrProfile,
                    profile: profile,
                });
            }
        );
export const updateProfile = (dispatch, profile) =>
    fetch(`${PROFILE_REST}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            dispatch({
                type: updateProfileById,
                profile: profile,
            });
            return response.json();
        })
        .then(resolvedResponse => console.log('updateProfile Response:', resolvedResponse));

export default {
    getCurrentProfile, updateProfile
};