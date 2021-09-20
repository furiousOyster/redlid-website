import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import LandingPage from "../pages/LandingPage";
import Bins from '../pages/bins'
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
    <Route component={LandingPage} />
  </Switch>
);
