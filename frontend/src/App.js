import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Post from './component/Post'
import Posts from './component/Posts'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Posts}></Route>
        <Route exect path="/posts/:id" component={Post}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
