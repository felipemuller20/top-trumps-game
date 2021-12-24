import React from 'react';

function DeckCover({ image, name }) {
  const click = () => {
    console.log('teste');
  }
  return(
    <div className="coverContainer" onClick={click }>
      <img className="coverImg" src={image} alt={`${name} cover`} />
      <button className="coverName">{ name }</button>
    </div>
  )
};

export default DeckCover;
