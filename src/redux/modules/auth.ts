import { push } from "connected-react-router";
import { AnyAction } from "redux";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import AccessTokenService from "../../services/AccessTokenService";
import RefreshTokenService from "../../services/RefreshTokenService";
import UserService from "../../services/UserService";
import { LoginReqType, TokenType } from "../../types";
import { getAccessTokenFromState, getRefreshTokenFromState } from "../utils";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};

const options = {
  prefix: "sogang-ari/auth",
};

export const { success, pending, fail } = createActions(
  {
    SUCCESS: (accessToken: string, refreshToken: string) => ({
      accessToken,
      refreshToken,
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
    const Token: TokenType = yield call(UserService.login, action.payload);

    AccessTokenService.set(Token.accessToken);
    RefreshTokenService.set(Token.refreshToken);
    yield put(success(Token.accessToken, Token.refreshToken));
    console.log("login token!!!!!", Token);
    yield put(push("/"));
  } catch (error: any) {
    console.log("Error:", error?.response);
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const refreshToken: string = yield select(getRefreshTokenFromState);
    const accessToken: string = yield select(getAccessTokenFromState);
    console.log("logout before refreshToken!!!!!", refreshToken);
    console.log("logout before accessToken!!!!!", accessToken);

    yield call(UserService.logout, { accessToken, refreshToken });
    console.log("logout after!!!!!");
  } catch (error) {
    console.log(error);
  } finally {
    AccessTokenService.remove();
    RefreshTokenService.remove();
    yield put(success(null, null));
  }
}
