import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Route path="/login" component={Login} />
          <Sidebar />
          <Chat />
        </div>
      </div>
    </Router>

  );
}

export default App;
