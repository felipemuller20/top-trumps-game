import React from 'react';

function CardDetails({ match: { params: { id } } }) {
  return(
    <h1>Detalhes {id}</h1>
  )
}

export default CardDetails;
