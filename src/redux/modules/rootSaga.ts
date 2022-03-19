import { all } from "redux-saga/effects";
import { sagas as authSagas } from "./auth";
import { sagas as wishSagas } from "./wishs";

export default function* rootSaga() {
  yield all([authSagas(), wishSagas()]);
}
