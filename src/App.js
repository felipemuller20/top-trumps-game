import React from 'react';
import { Switch, Route } from "react-router-dom";
import CreateDeck from './pages/CreateDeck';
import Decks from './pages/Decks';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Decks } />
      <Route path="/new-deck" component={ CreateDeck } />
    </Switch>
  );
}

export default App;
