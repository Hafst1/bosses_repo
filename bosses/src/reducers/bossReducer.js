import { UPDATE_BOSS } from '../constants';

const initialState = {
    name: '',
    description: '',
    url: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BOSS: return action.payload;
        default: return state;
    };
};