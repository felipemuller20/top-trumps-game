import React from 'react';

function DeckCover({ image, name }) {
  return(
    <div>
      <h3>{ name }</h3>
      <img src={image} alt={`${name} cover`} />
    </div>
  )
};

export default DeckCover;
