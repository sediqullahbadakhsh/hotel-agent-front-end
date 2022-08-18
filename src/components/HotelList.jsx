import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteHotel } from '../redux/Hotel/Hotel';

const HotelList = ({ hotel }) => {
  const style = {
    color: 'grey',
    margin: '2px',
    fontSize: '1.9em',
    cursor: 'pointer',
  };
  const btnStyle = {
    color: 'red',
    margin: '0.5px',
    fontSize: '1.5em',
  };

  const dispatch = useDispatch();
  // eslint-disable-next-line
  return (
    <div className="ft-card">
      <div className="img-container">
        <img src={hotel.image[0]} alt={hotel.name} className="carousel-image" />
      </div>

      <button
        /* eslint-disable */
        type="button"
        className="rmBtn"
        onClick={() =>
          dispatch(deleteHotel(hotel.id))
        }
        /* eslint-enable */
      >
        <AiOutlineDelete style={btnStyle} />
      </button>
      <Link to={`/hotel/log/${hotel.id}`}>
        <p className="card-title">{hotel.name}</p>
      </Link>
      <p className="line">-----------------------</p>
      <div className="description-container">
        <p className="card-description">{hotel.description}</p>
      </div>
      <div className="card-icon">
        <span>
          <RiFacebookCircleLine style={style} />
        </span>
        <span>
          <TiSocialTwitterCircular style={style} />
        </span>
        <span>
          <RiInstagramLine style={style} />
        </span>
      </div>
    </div>
  );
};

export default HotelList;
