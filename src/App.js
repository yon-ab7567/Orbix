import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './modules/home/Home';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      {/* Add other routes here */}
    </Switch>
  </Router>
);

export default App;