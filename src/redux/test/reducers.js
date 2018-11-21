import * as types from "./types";

export default function (
    state = {
        actions: [],
    }, action) {
    switch (action.type) {
        case types.SET_ACTIONS: {
            return {...state, actions: [...action.payload]}
        }
        default:
            return state;
    }
}