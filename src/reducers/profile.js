import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'edit-profile-name':
            const people = {
                _id: (new Date()).getTime() + '',
            };
            return ({
                profile: [
                    people,
                    ...state.profile,
                ]
            });
            break;
        default:
            return (state);
    }
};

export default profile;