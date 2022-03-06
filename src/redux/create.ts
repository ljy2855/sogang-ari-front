import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import RefreshTokenService from "../services/RefreshTokenService";
import { composeWithDevTools } from "redux-devtools-extension";
import AccessTokenService from "../services/AccessTokenService";
import { createBrowserHistory } from "history";
import rootreducer from "./modules/reducer";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const refreshToken = RefreshTokenService.get();
  const accessToken = AccessTokenService.get();

  const store = createStore(
    rootreducer(history),
    {
      auth: {
        accessToken,
        refreshToken,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
