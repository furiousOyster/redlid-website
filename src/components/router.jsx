import * as React from "react";
import { Switch, Route, Router } from "wouter";
import About from "../pages/about";
import LandingPage from "../pages/LandingPage";
import Bins from '../pages/Bins'
import Skips from '../pages/Skips'
/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/bins" component={Bins}/>
    <Route path="/skips" component={Skips}/>
    <Route component={LandingPage} />
  </Switch>
);
