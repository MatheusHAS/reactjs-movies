import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import { Home, NotFound, MovieDetail } from '@/presentation/pages'
import { Header } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ReactRouter>
      <Header />
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
