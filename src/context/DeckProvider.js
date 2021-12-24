import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeckContext from './DeckContext';

function DeckProvider({ children }) {
  const [decks, setDecks] = useState([]);

  return (
    <DeckContext.Provider
      value={{
        decks,
        setDecks,
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
