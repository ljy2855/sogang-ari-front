import { AnyAction } from "redux";
import { createActions, handleActions } from "redux-actions";
import { put, call, takeEvery, select } from "redux-saga/effects";
import { WishResType } from "../../types";
import {
  getAccessTokenFromState,
  getClubsFromState,
  getStudentIdFromState,
} from "../utils";
import WishService from "../../services/WishService";

export interface WishsState {
  clubs: WishResType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: WishsState = {
  clubs: null,
  loading: false,
  error: null,
};

const options = {
  prefix: "sogang-ari/wishs",
};

export const { success, pending, fail } = createActions(
  {
    SUCCESS: (wishs: WishResType[]) => ({ wishs }),
  },
  "PENDING",
  "FAIL",
  options
);

const reducer = handleActions<WishsState, any>(
  {
    PENDING: (state, action) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      clubs: action.payload.wishs,
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

export const { addWish, deleteWish, getWishs } = createActions(
  {
    ADD_WISH: (clubId: string) => ({
      clubId,
    }),
    DELETE_WISH: (clubId: string) => ({ clubId }),
  },
  "GET_WISHS",
  options
);

export function* sagas() {
  yield takeEvery(`${options.prefix}/GET_WISHS`, getWishsSaga);
  yield takeEvery(`${options.prefix}/ADD_WISH`, addWishSaga);
  yield takeEvery(`${options.prefix}/DELETE_WISH`, deleteWishSaga);
}

function* getWishsSaga() {
  try {
    yield put(pending());
    const token: string = yield select(getAccessTokenFromState);
    const studentId: string = yield select((state) => state.auth.studentId);
    const Wishs: WishResType[] = yield call(
      WishService.getWishs,
      token,
      studentId
    );
    yield put(success(Wishs));
  } catch (error: any) {
    yield put(
      fail(new Error(error?.response?.data?.message || "UNKNOWN_ERROR"))
    );
  }
}

interface AddWishSagaAction extends AnyAction {
  payload: {
    clubId: string;
  };
}

function* addWishSaga(action: AddWishSagaAction) {
  try {
    yield put(pending());
    const token: string = yield select(getAccessTokenFromState);
    const studentId: string = yield select(getStudentIdFromState);
    const { clubId } = action.payload;
    const club: WishResType = yield call(
      WishService.addWish,
      token,
      studentId,
      clubId
    );
    const clubs: WishResType[] = yield select(getClubsFromState);
    yield put(success([...clubs, club]));
  } catch (error: any) {
    yield put(
      fail(new Error(error?.response?.data?.message || "UNKNOWN_ERROR"))
    );
  }
}

interface DeleteWishSagaAction extends AnyAction {
  payload: {
    clubId: string;
  };
}

function* deleteWishSaga(action: DeleteWishSagaAction) {
  try {
    const token: string = yield select(getAccessTokenFromState);
    const studentId: string = yield select(getStudentIdFromState);
    const { clubId } = action.payload;
    yield call(WishService.deleteWish, token, studentId, clubId);
    const clubs: WishResType[] = yield select(getClubsFromState);
    yield put(
      success(clubs.filter((club) => club.clubId.toString() !== clubId))
    );
  } catch (error: any) {
    yield put(
      fail(new Error(error?.response?.data?.message || "UNKNOWN_ERROR"))
    );
  }
}
