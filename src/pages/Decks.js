import React from 'react';
import { Link } from 'react-router-dom';
import DeckCover from '../components/DeckCover';

function Decks() {
  return(
    <>
      <h1>Super Trunfo</h1>
      <h2>Selecione um baralho abaixo ou { <Link to="/new-deck">Clique aqui</Link> }&nbsp; 
        para criar um novo!
      </h2>
      <div>
        
      </div>
    </>
  )
}

export default Decks;
