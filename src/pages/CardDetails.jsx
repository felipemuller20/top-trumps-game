import React, { useContext, useState } from 'react';
import DeckContext from '../context/DeckContext';
import { fetchCards } from '../services/fetchApi';

function CardDetails({ match: { params: { id } } }) {
  const { decks } = useContext(DeckContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useState(() => {
    const getCards = async () => {
      const result = await fetchCards();
      setCards(result);
    };
    getCards();
  }, []);

  useState(() => {
    if (cards.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [cards])

  return(
    <h1>Detalhes {typeof id}</h1>
  )
}

export default CardDetails;
