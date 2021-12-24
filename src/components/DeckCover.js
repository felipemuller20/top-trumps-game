import React from 'react';

function DeckCover({ image, name }) {
  return(
    <div>
      <img src={image} alt={`${name} cover`} />
      <h3>{ name }</h3>
    </div>
  )
};

export default DeckCover;
