import { put, takeEvery, all, call} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import { fetchDefautTesting } from "./../../services/api/test";

export function* renderTestActions(payload){
    try {
        const activities = fetchDefautTesting("someUrl");
        console.log('actions', activities)
        yield put(actions.setActions(activities));
    }catch(err){
        console.log(err);
    }
}

export function* watchGetDefaultTestActions(){
    yield takeEvery(types.FETCH_ACTIONS, renderTestActions);
}

/**
 * TODO: later when switch template we will render canvas again.
 */

// export function* watchSwitchTemplate(){
//     yield takeEvery(types.GET_DEFAULT_CANVAS, renderCanvas);
// }


export const sagas = [
    watchGetDefaultTestActions
];