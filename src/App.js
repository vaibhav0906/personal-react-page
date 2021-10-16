import React from 'react';
import { Route }from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductProject from './components/pages/ProductProject';
import DevProject from './components/pages/DevProject.js';

const App = () => (
<div> 
  <Route path="/" exact component={HomePage} /> 
  <Route path="/dev-projects" exact component={DevProject} /> 
  <Route path="/product-projects" exact component={ProductProject} /> 
  </div>);
export default App;
