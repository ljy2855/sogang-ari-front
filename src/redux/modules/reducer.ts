import { connectRouter, RouterState } from "connected-react-router";
import { AnyAction, combineReducers, Reducer } from "redux";
import auth, { AuthState } from "./auth";
import { History } from "history";
import wish, { WishsState } from "./wish";

export interface RootState {
  auth: AuthState;
  wish: WishsState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

const rootreducer = (history: History<unknown>) =>
  combineReducers({
    auth,
    wish,
    router: connectRouter(history),
  });

export default rootreducer;
