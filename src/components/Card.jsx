import React from 'react';

function Card({ image, name, attr1, attr2, attr3, attr1Stat, attr2Stat, attr3Stat,
    description, trump }) {
  return (
    <div className="card-container">
      <img src={ image } alt={`${name} cover`} />
      <div className="stats-container">
        <p>{attr1}: {attr1Stat}</p>
        <p>{attr2}: {attr2Stat}</p>
        <p>{attr3}: {attr3Stat}</p>
      </div>
      <p>{description}</p>
      {trump && '⭐'}
    </div>
  )
};

export default Card;
