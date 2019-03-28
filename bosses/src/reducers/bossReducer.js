import { GET_BOSSES, CREATE_BOSS } from '../constants';

// const initialState = {
//     name: '',
//     description: '',
//     url: ''
// };

// export default function(state = [], action) {
//     switch (action.type) {
//         case UPDATE_BOSS: return action.payload;
//         default: return state;
//     };
// };

export default function(state = [], action) {
    switch (action.type) {
        case GET_BOSSES: return action.payload;
        case CREATE_BOSS: return state.push(action.payload);
        default: return state;
    };
};