/* eslint-disable */
import React from 'react';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';

const FeaturedHotel = ({ hotel }) => {
  return (
    <div>
      <img src={hotel.image[0]} alt={hotel.name} className="carousel-image" />
      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
      <div>
        <a href="#">
          <RiFacebookCircleLine />
        </a>
        <a href="#">
          <TiSocialTwitterCircular />
        </a>
        <a href="#">
          <RiInstagramLine />
        </a>
      </div>
    </div>
  );
};

export default FeaturedHotel;
