import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelList from '../components/HotelList';
import { addHotel, viewHotel, deleteHotel } from '../redux/Hotel/Hotel';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.Hotel);
  return (
    <div className="App">
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(addHotel())}
      >
        Add Hotel
      </button>
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(viewHotel())}
      >
        View Hotel
      </button>
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(deleteHotel())}
      >
        Delete Hotel
      </button>

      <div className="featured-container hotel-list">
        <div className="featured-heading">
          <h1>Featured Hotels</h1>
          <p>Please select a Hotel</p>
        </div>
        {data.map((hotel) => (
          <HotelList hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
