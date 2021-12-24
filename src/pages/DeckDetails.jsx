import React, { useState } from 'react';
import { fetchCards, fetchDeckId } from '../services/fetchApi';
import DeckCover from '../components/DeckCover';
import Card from '../components/Card';

function DeckDetails({ match: { params: { id } } }) {
  const [deck, setDeck] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useState(() => {
    const getCards = async () => {
      const result = await fetchCards();
      const filtered = result.filter((card) => card.decks[0].id === parseInt(id));
      setCards(filtered);
    };
    const getDeckById = async () => {
      const result = await fetchDeckId(id);
      setDeck(result);
    }
    getCards();
    getDeckById();
    setIsLoading(false);
  }, []);

  return(
    <>
      <header>
        <h1>Super Trunfo!</h1>
        <DeckCover
          image={ deck.coverImg }
          name={ deck.name }
        />
      </header>
      <main className="cards-container">
        {
          isLoading ? 'Carregando as cartas...' : (
            cards.map((card) => (
              <Card
                image={ card.image }
                name={ card.name }
                attr1={ deck.attr1 }
                attr2={ deck.attr2 }
                attr3={ deck.attr3 }
                attr1Stat={ parseInt(card.attr1) }
                attr2Stat={ parseInt(card.attr2) }
                attr3Stat={ parseInt(card.attr3) }
                description={ card.description }
                trump={ card.trump }
              />
            ))
          )
        }
      </main>
    </>
  )
}

export default DeckDetails;
