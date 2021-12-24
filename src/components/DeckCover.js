import React from 'react';

function DeckCover({ image, name }) {
  return(
    <div className="coverBorder">
      <h3 className="coverName">{ name }</h3>
      <img className="coverImg" src={image} alt={`${name} cover`} />
    </div>
  )
};

export default DeckCover;
