/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedHotel from '../components/FeaturedHotel';

const FeaturedPage = () => {

  const { data } = useSelector((state) => state.MostRecent);
  return (
    <div className="App featured-container">
      <div className="featured-heading">
        <h1>Featured Hotels</h1>
        <p>please choose a Hotel</p>
      </div>
        {data.map((hotel) => (
          <FeaturedHotel hotel={hotel} key={hotel.id} />
        ))}
    </div>
  );
};

export default FeaturedPage;
