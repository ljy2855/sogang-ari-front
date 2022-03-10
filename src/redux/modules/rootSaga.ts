import { all } from "redux-saga/effects";
import { sagas as authSagas } from "./auth";
import { sagas as wishSagas } from "./wish";

export default function* rootSaga() {
  yield all([authSagas(), wishSagas()]);
}
