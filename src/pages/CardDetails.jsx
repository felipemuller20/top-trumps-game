import React, { useState } from 'react';
import { fetchCards, fetchDeckId } from '../services/fetchApi';
import DeckCover from '../components/DeckCover';

function CardDetails({ match: { params: { id } } }) {
  const [deck, setDeck] = useState([]);
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
    const getDeckById = async () => {
      const result = await fetchDeckId(id);
      setDeck(result);
    }
    getDeckById();
  }, []);

  useState(() => {
    if (cards.length > 0 && deck.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [cards])

  return(
    <>
      <header>
        <h1>Super Trunfo!</h1>
        <DeckCover
          image={ deck.coverImg }
          name={ deck.name }
        />
      </header>
      <body className="cards-container">

      </body>
    </>
  )
}

export default CardDetails;
