import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>
    </Router>

  );
}

export default App;
