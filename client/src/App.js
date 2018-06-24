import React from "react";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (

  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>

    </div>
  </Router>
);

export default App;
