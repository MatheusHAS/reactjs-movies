import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import { Home, NotFound, MovieDetail } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <ReactRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id" exact>
          <MovieDetail />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </ReactRouter>
  )
}

export default Router
