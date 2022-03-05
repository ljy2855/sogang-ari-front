import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import RefreshTokenService from "../services/RefreshTokenService";
import { composeWithDevTools } from "redux-devtools-extension";
import AccessTokenService from "../services/AccessTokenService";

const create = () => {
  const refreshToken = RefreshTokenService.get();
  const accessToken = AccessTokenService.get();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer(history),
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
