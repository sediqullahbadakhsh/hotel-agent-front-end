/* eslint-disable */
import React from 'react';

const FeaturedHotel = ({ hotel }) => {
  return (
    <div>
      <img src={hotel.image[0]} alt={hotel.name} className="carousel-image" />
      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
    </div>
  );
};

export default FeaturedHotel;
