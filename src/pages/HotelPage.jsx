import React from 'react';
import { useDispatch } from 'react-redux';
import { listHotel, addHotel, viewHotel } from '../redux/Hotel/Hotel';

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(listHotel())}
      >
        List Hotel
      </button>

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
    </div>
  );
};

export default HomePage;
