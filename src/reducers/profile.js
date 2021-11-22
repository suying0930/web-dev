import owner from './data/profile.json';

const initialState = {
    ...owner,
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'get-current-profile':
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
        case 'update-profile':
            return ({
                ...state,
                ...action.profile,
            });
        default:
            return state;
    }
};

export default profile;