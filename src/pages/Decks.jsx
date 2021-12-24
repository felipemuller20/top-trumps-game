import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeckCover from '../components/DeckCover';
import DeckContext from '../context/DeckContext';
import { fetchDecks } from '../services/fetchApi';

function Decks() {
  const { setDecks, decks } = useContext(DeckContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDecks = async () => {
      const result = await fetchDecks();
      setDecks(result);
    };
    getDecks();
  }, [])

  useEffect(() => {
    if (decks.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [decks]);

  return(
    <>
      <h1 className="mainTitle">Super Trunfo</h1>
      <h2 className="mainSub">Selecione um baralho abaixo ou&nbsp;
      { <Link to="/new-deck">Clique aqui</Link> }&nbsp; 
        para criar um novo!
      </h2>
      <div className="decksContainer">
        {
          isLoading ? 'Carregando baralhos...' : (
            decks.map((deck, index) => (
              <DeckCover
                key={ index }
                name={ deck.name }
                image={ deck.coverImg }
                id={ deck.id }
              />
            ))
          )
        }
      </div>
    </>
  )
}

export default Decks;
