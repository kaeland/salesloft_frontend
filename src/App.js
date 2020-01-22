import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'


function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
