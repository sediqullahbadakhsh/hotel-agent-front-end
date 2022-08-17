import React from 'react';
import { useSelector } from 'react-redux';
import HotelList from '../components/HotelList';

const HomePage = () => {
  const { data } = useSelector((state) => state.Hotel);

  return (
    <div className="featured-container">
      <div className="featured-heading">
        <h1>Hotel List</h1>
      </div>
      <div className="hotel-list">
        {data.map((hotel) => (
          <HotelList hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
