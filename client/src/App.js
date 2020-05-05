import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import RandInput from './components/RandInput';
import Data from './components/Data'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/input' component={RandInput}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/data' component={Data}/>
      </Switch>
    </div>
  );
}

export default App;
