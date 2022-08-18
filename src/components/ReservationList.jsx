/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHotelReservation } from '../redux/Reservations/Reservation';

const ReservationList = ({ reservation }) => {
  const { data } = useSelector((state) => state.MostRecent);
  const dispatch = useDispatch();
  const hotel = data.filter((hotel) => hotel.id === reservation.hotel_id);

  return (
    <div className="reservation-item">
      <div className="card-top">
        <h3>{hotel[0].name}</h3>
        <h3>{reservation.city}</h3>
      </div>
      <div className="card-bottom">
        <p>Date: {reservation.date}</p>
        <p>Number of Days: {reservation.number_of_days}</p>
        <p>Number of Guests: {reservation.number_of_guests}</p>
        <p>Number of Rooms: {reservation.number_of_rooms}</p>
      </div>
      <button
        type="button"
        onClick={() =>
          dispatch(deleteHotelReservation(reservation.id))
            ? window.location.reload()
            : null
        }
      >
        Cancel Reservation
      </button>
    </div>
  );
};

export default ReservationList;
