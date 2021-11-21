// const PROFILE_API = 'http://localhost:4000/api/profile';
//
// export const fetchAllProfile = (dispatch) =>
//     fetch(PROFILE_API)
//         .then(response => response.json())
//         .then(profile =>
//             dispatch({
//                 type: 'fetch-all-tweets',
//                 profile
//             })
//         );
//
// export const likeTweet = (dispatch, profile) =>
//     fetch(`${PROFILE_API}/${profile._id}/like`, {
//         method: 'PUT'
//     })
//         .then(response =>
//             dispatch({
//                 type: 'like-tweet',
//                 profile
//             })
//         );