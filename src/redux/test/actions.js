import * as types from "./types";

export const setActions = (payload) => {
    return {
        type: types.SET_ACTIONS,
        payload: payload
    }
};


export const fetchActions = (payload) => {
    return {
        type: types.FETCH_ACTIONS,
        payload: payload
    }
};