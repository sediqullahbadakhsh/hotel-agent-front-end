/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

const ReservationsPage = () => {
  const { data } = useSelector((state) => state.Reservation);

  return (
    <div className="App">
      <div className="">
        <h1>My Reservations</h1>
      </div>

      <div className="">
        {data.map((reservation) => (
          <p key={reservation.id}>{reservation.city}</p>
        ))}
      </div>
    </div>
  );
};

export default ReservationsPage;
