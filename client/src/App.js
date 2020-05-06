import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import RandInput from './components/RandInput';
import Data from './components/Data'
import ContactList from './components/ContactList';
import { Switch, Route } from 'react-router-dom';

// Main component that will be loaded into index.js. Contains all other components to be rendered.
// Using React-Router for navigation without page reload.

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={RandInput}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/data' component={Data}/>
        <Route exact path='/list' component={ContactList}/>
      </Switch>
    </div>
  );
}

export default App;
