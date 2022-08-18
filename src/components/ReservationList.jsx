/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHotelReservation } from '../redux/Reservations/Reservation';

const ReservationList = ({ reservation }) => {
  const dispatch = useDispatch();
  const hotel = data.filter((hotel) => hotel.id === reservation.hotel_id);
  const { data } = useSelector((state) => state.MostRecent);
  return (
    <div className="reservation-item">
      <h3>{hotel[0].name}</h3>
      <h3>{reservation.city}</h3>
      <h3>{reservation.date}</h3>
      <h3>{reservation.number_of_days}</h3>
      <h3>{reservation.number_of_guests}</h3>
      <h3>{reservation.number_of_rooms}</h3>
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
