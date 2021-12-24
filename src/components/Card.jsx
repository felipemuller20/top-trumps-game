import React from 'react';

function Card({ image, name, attr1, attr2, attr3, attr1Stat, attr2Stat, attr3Stat,
    description, trump }) {
  return (
    <div className="card-container">
      <img src={ image } alt={`${name} cover`} className="card-img"/>
      <h3>{name}</h3>
      <div className="stats-container">
        <p className="stats">{attr1}: {attr1Stat}</p>
        <p className="stats">{attr2}: {attr2Stat}</p>
        <p className="stats">{attr3}: {attr3Stat}</p>
      </div>
      <p className="description">{description}</p>
      {trump && '⭐'}
    </div>
  )
};

export default Card;
