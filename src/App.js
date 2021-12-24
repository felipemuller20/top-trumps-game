import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import CreateDeck from './pages/CreateDeck';
import Decks from './pages/Decks';
import DeckDetails from './pages/DeckDetails';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/decks/:id" component={ DeckDetails } />
      <Route path="/decks" component={ Decks } />
      <Route path="/new-deck" component={ CreateDeck } />
    </Switch>
  );
}

export default App;
