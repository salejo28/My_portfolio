import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav'
import { routes } from './config/routes'
import './App.css'

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Switch>
          {
            routes.map(route => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))
          }
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App