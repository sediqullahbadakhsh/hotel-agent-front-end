/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import ReservationList from '../components/ReservationList';

const ReservationsPage = () => {
  const { data } = useSelector((state) => state.Reservation);

  return (
    <div className="reservation-container">
      <div className="reservation-heading">
        <h1>My Reservations</h1>
      </div>

      <div className="reservation-items">
        {data.map((reservation) => (
          <ReservationList key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ReservationsPage;
