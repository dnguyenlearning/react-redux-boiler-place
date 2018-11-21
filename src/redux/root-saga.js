import { sagas as testSagas } from "./test";

import { fork, all } from "redux-saga/effects";


const allSagas = [
	...testSagas
];

// start all sagas in parallel
export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}