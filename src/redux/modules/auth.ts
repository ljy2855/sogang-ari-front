import { push } from "connected-react-router";
import { AnyAction } from "redux";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import AccessTokenService from "../../services/AccessTokenService";
import RefreshTokenService from "../../services/RefreshTokenService";
import StudentIdService from "../../services/StudentIdService";
import UserService from "../../services/UserService";
import { LoginReqType, LoginResType } from "../../types";
import { getAccessTokenFromState, getRefreshTokenFromState } from "../utils";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  studentId: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  studentId: null,
  loading: false,
  error: null,
};

const options = {
  prefix: "sogang-ari/auth",
};

export const { success, pending, fail } = createActions(
  {
    SUCCESS: (
      accessToken: string,
      refreshToken: string,
      studentId: string
    ) => ({
      accessToken,
      refreshToken,
      studentId,
    }),
  },
  "PENDING",
  "FAIL",
  options
);

const reducer = handleActions<AuthState, any>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
      studentId: action.payload.studentId,
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

// saga
export const { login, logout } = createActions(
  {
    LOGIN: ({ studentId, password }: LoginReqType) => ({
      studentId,
      password,
    }),
  },
  "LOGOUT",
  options
);

export function* sagas() {
  yield takeEvery(`${options.prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${options.prefix}/LOGOUT`, logoutSaga);
}

interface LoginSagaAction extends AnyAction {
  payload: LoginReqType;
}

function* loginSaga(action: LoginSagaAction) {
  try {
    yield put(pending());
    const { studentId } = action.payload;
    const token: LoginResType = yield call(UserService.login, action.payload);
    AccessTokenService.set(token.accessToken);
    RefreshTokenService.set(token.refreshToken);
    StudentIdService.set(studentId);
    yield put(success(token.accessToken, token.refreshToken, studentId));
    yield put(push("/"));
  } catch (error: any) {
    yield put(
      fail(new Error(error?.response?.data?.message || "UNKNOWN_ERROR"))
    );
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const refreshToken: string = yield select(getRefreshTokenFromState);
    const accessToken: string = yield select(getAccessTokenFromState);
    yield call(UserService.logout, { accessToken, refreshToken });
  } catch (error) {
  } finally {
    AccessTokenService.remove();
    RefreshTokenService.remove();
    StudentIdService.remove();
    yield put(success(null, null, null));
  }
}
