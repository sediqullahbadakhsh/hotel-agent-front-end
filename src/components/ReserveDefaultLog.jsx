/* eslint-disable */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addHotelReservation } from '../redux/Reservations/Reservation';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import countries from '../components/CountryPicker';
import background from '../img/background.jpg';

const ReservePage = () => {
  const { data } = useSelector((state) => state.Hotel);
  let { name } = useParams();
  const hotel = data.filter((hotel) => hotel.id === parseInt(name, 10));
  name = name.replace(/_/g, ' ');
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
        user_id: localStorage.getItem('userId'),
        hotel_id: hotel[0].id,
    }
  });
  const onSubmit = (data, e) => {
    dispatch(addHotelReservation(data));
    e.target.reset();
}

  const countryToFlag = (isoCode) => (typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode);

  return (
    <div className="reserve-container" style={{ 
        backgroundImage: `url(${background})` 
      }}>
      <><div className="reserve-heading">
              <h1>BOOK A HOTEL</h1>
              <hr></hr>
              <p>{hotel[0].name}</p>
          </div><div className="reserve-form">
                  <form onSubmit={handleSubmit(onSubmit)} >
                      <section className='countries-container'>
                          <select {...register('country', { required: true })}>
                              {countries.map((item) => (
                                  <option key={item.label} value={item.label}>
                                      {item.label}
                                      {' '}
                                      {countryToFlag(item.code)}
                                  </option>
                              ))}
                          </select>
                      </section>
                      <section className='date-container'>
                          <Controller
                              control={control}
                              name="date"
                              render={({
                                  field: {
                                      onChange, onBlur, value, ref,
                                  },
                              }) => (
                                  <ReactDatePicker
                                      className='date-picker'
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      selected={value}
                                      placeholderText="Select date" />
                              )} />
                      </section>
                      <section className='options-container'>
                          <input
                              placeholder="Number of days"
                              {...register('number_of_days', {
                                  valueAsNumber: true,
                                  validate: (value) => value > 0,
                              })} />
                          <input
                              placeholder="Number of rooms"
                              {...register('number_of_rooms', {
                                  valueAsNumber: true,
                                  validate: (value) => value > 0,
                              })} />
                          <input
                              placeholder="Number of guests"
                              {...register('number_of_guests', {
                                  valueAsNumber: true,
                                  validate: (value) => value > 0,
                              })} />

                      </section>
                      <section className='submit-container'>
                          <input type="submit" value="RESERVE"/>
                      </section>
                  </form>
              </div></>

    </div>
  );
};

export default ReservePage;
