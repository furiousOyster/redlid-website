import * as React from 'react'
import { Switch, Route, Router } from 'wouter'
import LandingPage from '../pages/LandingPage'
import Bins from '../pages/Bins'
import Skips from '../pages/Skips'
import Manage from '../pages/Manage'
import BinsBags from '../pages/BinsBags'
import Bags from '../pages/Bags'
import SkipGeneral from '../pages/SkipGeneral'
import SkipGreen from '../pages/SkipGreen'
import SkipHardfill from '../pages/SkipHardfill'

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/manage" component={Manage} />
    
    <Route path="/binsbags" component={BinsBags} />    
    <Route path="/bins" component={Bins} />
    <Route path="/bags" component={Bags} />
    
    <Route path="/skips" component={Skips} />
    <Route path="/skiphardfill" component={SkipHardfill} />
    <Route path="/skipgeneral" component={SkipGeneral} />
    <Route path="/skipgreen" component={SkipGreen} />
    <Route component={LandingPage} />
  </Switch>
)
