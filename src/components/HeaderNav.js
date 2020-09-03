import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Videos from "./Videos";

const HeaderNav = () => {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Link to="/">
            <h1>WomenCode.se</h1>
          </Link>
        </header>
        <nav>
          <Link to="/videos">Videos</Link>
        </nav>
        <br />

        {/* A <Switch> looks through its children <Route>s and */}
        {/* renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/videos">
            <Videos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HeaderNav;
