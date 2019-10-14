import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList.component';
import data from './data/products';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import {
  About,
  Home,
  Recipes,
  RecipeDetail,
  Contact } from './views';


function App() {
  return (
    <main>
      
      
      
      <Router>

          <aside>
            <p>Navigation: </p>
            <Link to={`/home`}>Home</Link> |
              <Link to={`/about`}>About</Link> |
              <Link to={`/recipes`}>Recipes</Link> |
              <Link to={`/recipe-detail`}>RecipeDetail page</Link> |
              <Link to={`/contact-us`}>Contact Us</Link>
          </aside>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe-detail" component={RecipeDetail} />
            <Route path="/contact-us" component={Contact} />
          </Switch>
        </Router>

    </main>
  );
}

export default App;
