import owner from './data/profile.json';

export const getCurrProfile = 'get-current-profile';
export const updateProfileById = 'update-profile';

const initialState = {
    ...owner,
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case getCurrProfile:
            return ({
                ...state,
                ...action.profile,
            })
        case 'EDIT':
            console.log('Editing profile...');
            return ({
                ...state,
                ...action.payload,
            });
        case updateProfileById:
            return ({
                ...state,
                ...action.profile,
            });
        default:
            return state;
    }
};

export default profile;