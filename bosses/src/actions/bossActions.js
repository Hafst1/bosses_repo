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

export const createBoss = (newBoss) => {
    console.log('HELLO')
    return (dispatch) => {
        return bossService.createBoss(newBoss).then(resp => {
                newBoss.Id = resp.id;
                dispatch(createBossSuccess(newBoss));
            })
    };
};

const createBossSuccess = (newBoss) => {
    return {
        type: 'CREATE_BOSS',
        payload: newBoss
    };
};