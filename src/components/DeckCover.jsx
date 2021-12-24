import React from 'react';
import { useHistory, useLocation } from 'react-router';

function DeckCover({ image, name, id }) {
  const history = useHistory();
  const location = useLocation();
  const click = () => {
    if (location.pathname === '/decks') history.push(`/decks/${id}`);
  }
  return(
    <div className="coverContainer" onClick={ click }>
      <img className="coverImg" src={image} alt={`${name} cover`} />
      <button className="coverName">{ name }</button>
    </div>
  )
};

export default DeckCover;
