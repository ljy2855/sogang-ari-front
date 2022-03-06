import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import ClubService from "../../services/ClubService";
import { ClubResType } from "../../types";
import { getAccessTokenFromState } from "../utils";

export interface ClubsState {
  clubs: ClubResType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: ClubsState = {
  clubs: null,
  loading: false,
  error: null,
};

const options = {
  prefix: "sogang-ari/clubs",
};

export const { success, pending, fail } = createActions(
  {
    SUCCESS: (clubs) => ({ clubs }),
  },
  "PENDING",
  "FAIL",
  options
);

const reducer = handleActions<ClubsState, any>(
  {
    PENDING: (state, action) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      clubs: action.payload.clubs,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options
);

export default reducer;

export const { getBooks } = createActions("GET_BOOKS", options);

export function* sagas() {
  yield takeEvery(`${options.prefix}/GET_BOOKS`, getBooksSaga);
}

function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select(getAccessTokenFromState);
    const clubs: ClubResType[] = yield call(ClubService.getClubs, token);
    yield put(success(clubs));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}
