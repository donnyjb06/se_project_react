import React from 'react';
import './ItemCard.css';

const ItemCard = ({ link, name, condition, handleCardClick }) => {
  return (
    <li className='item-card' onClick={handleCardClick}>
      <p className='item-card__name'>{name}</p>
      <img src={link} alt='article of clothing' className='item-card__image' />
    </li>
  );
};

export default ItemCard;
