import { CREATE_BOSS, UPDATE_BOSS } from '../constants';
import bossService from '../services/bossService';

// export const createBoss = newBoss => {
//     return {
//         type: CREATE_BOSS,
//         payload: newBoss
//     };
// };

// export const updateBoss = newBoss => {
//     return {
//         type: UPDATE_BOSS,
//         payload: newBoss
//     };
// };

export const getBosses = () => {
    return (dispatch) => {
        return bossService.getBosses().then(bossesInfo => {
            if (bossesInfo) {
                dispatch(getBossesFromServerSuccess(bossesInfo));
            }
        });
    };
};

const getBossesFromServerSuccess = (bossesInfo) => {
    return {
        type: 'GET_BOSSES',
        payload: bossesInfo
    };
};

export const createBoss = () => {
    return (dispatch) => {
        return bossService.createBoss().then(response => {
            if (response.ok) {
                return response.json();
            }
            // else {
            //     dispatch(createBossFailed(response.status));
            // }
        }).then(newBoss => {
            if (newBoss) {
                dispatch(createBossSuccess(newBoss));
            }
        });
    };
};

const createBossSuccess = (newBoss) => {
    return {
        type: 'CREATE_BOSS',
        payload: newBoss
    };
};

