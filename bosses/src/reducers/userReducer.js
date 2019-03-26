import { UPDATE_USER } from '../constants';

const initialState = {
    name: '',
    description: '',
    url: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER: return action.payload;
        default: return state;
    };
};