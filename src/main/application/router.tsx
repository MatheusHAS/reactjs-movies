import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import { Home, NotFound } from '@/presentation/pages'
import { loadRequest } from '@/main/store/containers/movies/actions'

const Router: React.FC = () => {
  return (
    <ReactRouter>
      <Switch>
        <Route path="/" exact>
          <Home loadRequest={loadRequest} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </ReactRouter>
  )
}

export default Router
