/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

const FeaturedPage = () => {
  const { data } = useSelector((state) => state.MostRecent);
  return (
    <div className="App featured-container">
      <div className="featured-heading">
        <h1>Featured Hotels</h1>
        <p>please choose a Hotel</p>
      </div>
        {data.map((hotel) => (
        ))}
    </div>
  );
};

export default FeaturedPage;
