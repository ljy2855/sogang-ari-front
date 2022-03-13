import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ErrorBoundary from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import { history } from "./redux/create";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        {/* <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/club/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch> */}
        <Home />
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
