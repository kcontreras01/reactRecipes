import React, {useEffect, useState} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllRecipes from './components/AllRecipes';
import ShowRecipe from './components/ShowRecipe';
import Nav from './components/Nav';
import Landing from './components/Landing';

const App = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/recipes" exact component={AllRecipes}/>
          <Route path="/recipe/:title" component={ShowRecipe}/>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
