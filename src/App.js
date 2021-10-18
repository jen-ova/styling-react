import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Styling React</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <h2>Contact us</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
