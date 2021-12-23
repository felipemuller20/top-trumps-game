import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeckContext from './DeckContext';
import { fetchDecks } from '../services/fetchApi';

function DeckProvider({ children }) {
  const [decks, setDecks] = useState([]);
  const [getAtt, setGetAtt] = useState(false);

  const getDecks = async (order) => {
    const apiResult = await fetchDecks();
    setDecks(apiResult);
  };

  useEffect(() => {
    getDecks();
  }, [decks, getAtt]);

  return (
    <DeckContext.Provider
      value={{
        decks,
        setDecks,
        getAtt,
        setGetAtt,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}

DeckProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeckProvider;
