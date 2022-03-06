import { connectRouter, RouterState } from "connected-react-router";
import { AnyAction, combineReducers, Reducer } from "redux";
import auth, { AuthState } from "./auth";
import { History } from "history";
// import clubs from "./clubs";

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

const rootreducer = (history: History<unknown>) =>
  combineReducers({
    auth,
    // clubs,
    router: connectRouter(history),
  });

export default rootreducer;
