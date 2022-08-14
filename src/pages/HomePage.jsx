import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/User/User';

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        type="button"
        className="microphone"
        label="microphone"
        onClick={() => dispatch(createUser())}
      >
        create user
      </button>
    </div>
  );
};

export default HomePage;
