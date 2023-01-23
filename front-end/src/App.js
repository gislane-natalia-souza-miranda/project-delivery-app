import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;
