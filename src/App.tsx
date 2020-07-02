import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/love-concept" />}
          />
          <Route
            path="/love-concept"
            component={lazy(() => import("./pages/love-concept"))}
          />
          <Route
            path="/love-concept-finish"
            component={lazy(() => import("./pages/love-concept/finish"))}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
