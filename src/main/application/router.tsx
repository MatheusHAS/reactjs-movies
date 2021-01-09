import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import { Home, NotFound, MovieDetail } from '@/presentation/pages'
import { Header, Footer } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ReactRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/movie/:id" exact>
          <Header showBackButton={true} />
          <MovieDetail />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </ReactRouter>
  )
}

export default Router
