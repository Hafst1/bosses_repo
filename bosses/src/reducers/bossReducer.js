import { GET_BOSSES } from '../constants';

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
        default: return state;
    };
};