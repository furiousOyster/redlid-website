import * as React from 'react'
import { Switch, Route, Router } from 'wouter'
import Bins from '../pages/Bins'
import BinsBags from '../pages/BinsBags'
import Bags from '../pages/Bags'

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/bins" component={Bins} />
    <Route path="/bags" component={Bags} />
    <Route component={BinsBags} />
  </Switch>
)
