import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  listHotel,
  addHotel,
  viewHotel,
  deleteHotel,
} from '../redux/Hotel/Hotel';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listHotel());
  }, []);
  const { data } = useSelector((state) => state.Hotel);
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
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(deleteHotel())}
      >
        Delete Hotel
      </button>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
