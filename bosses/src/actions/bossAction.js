import { UPDATE_BOSS } from '../constants';

export const updateBoss = newBoss => {
    return {
        type: UPDATE_BOSS,
        payload: newBoss
    };
};