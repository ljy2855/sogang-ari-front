import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/club/:id"} component={Detail} />
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
