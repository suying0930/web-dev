import whoJson from './data/who.json';

const initialState = {
    whoList: whoJson,
}

const who = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND-ALL-WHO':
            return ({
                whoList: action.payload,
            })
        default:
            return state;
    }
};

export default who;
