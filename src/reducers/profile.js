import owner from './data/profile.json';

const initialState = {
    ...owner,
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT':
            console.log('Editing profile...');
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return (state);
    }
};

export default profile;