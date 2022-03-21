import { connectRouter, RouterState } from "connected-react-router";
import { AnyAction, combineReducers, Reducer } from "redux";
import auth, { AuthState } from "./auth";
import { History } from "history";
import wishs, { WishsState } from "./wishs";

export interface RootState {
  auth: AuthState;
  wishs: WishsState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

const rootreducer = (history: History<unknown>) =>
  combineReducers({
    wishs,
    auth,
    router: connectRouter(history),
  });

export default rootreducer;
