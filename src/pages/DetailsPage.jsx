/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { createUser } from '../redux/User/User';

const DetailsPage = () => {
  // const { hotel } = prop;
  const { data } = useSelector((state) => state.MostRecent);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="details-container">
        <div className="hotel-images">
          <img src={data[2].image[0]} alt="hotel" className="details-img" />
        </div>
        <div className="hotel-details">
          <h2 className="text-3xl font-bold underline">
            { data[2].name.toUpperCase() }
          </h2>
          <p className="text-xl">
            📌
            {' '}
            { data[2].address }
          </p>
          <div className="odd">
            <p>Price</p>
            <div className="views">
              <p>
                $
                {' '}
                { data[2].cost }
              </p>
            </div>
          </div>
          <div className="even">
            <h3>Description</h3>
            <div className="views">
              <p>🔖</p>
            </div>
          </div>
          <p className="text-xl">
            { data[2].description }
          </p>
          <button type="button" className="button-details" label="Reserve" onClick={() => dispatch(createUser())}>
            <BsBookmarkCheckFill />
            Reserve
            {' '}
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
