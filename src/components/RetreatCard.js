import React from 'react';
import './RetreatCard.css';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="retreat-card">
         <div class="retreat-image">
      <img src={retreat.image} alt={retreat.title} />
      </div>
     
      <h3>{retreat.title}</h3>
      <p>{retreat.description}</p>
      <p>Date: {new Date(retreat.date * 1000).toLocaleDateString()}</p>
      <p>Location: {retreat.location}</p>
      <p>Price: ${retreat.price}</p>
      
      </div>

      
  );
};

export default RetreatCard;

