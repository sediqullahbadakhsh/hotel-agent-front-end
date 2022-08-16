/* eslint-disable */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import countries from '../components/CountryPicker';

const ReservePage = () => {
//   const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  //   dispatch(logInUser(data));
  const { data } = useSelector((state) => state.MostRecent);

  const countryToFlag = (isoCode) => (typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode);

  return (
    <div className="reserve-container">
      <div className="reserve-heading">
        <h1>BOOK A HOTEL</h1>
        <p>Please select a Hotel</p>
      </div>
      <div className="reserve-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <select {...register('country', { required: true })}>
              {countries.map((item) => (
                <option key={item.id} value={item.label}>
                  {item.label}
                  {' '}
                  {countryToFlag(item.code)}
                </option>
              ))}
            </select>
          </section>
          <section>
            <Controller
              control={control}
              name="date"
              render={({
                field: {
                  onChange, onBlur, value, ref,
                },
              }) => (
                <ReactDatePicker
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  placeholderText="Select date"
                />
              )}
            />
          </section>
          <section>
            <input
              placeholder="Number of days"
              {...register('number_of_days', {
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
            />
            <input
              placeholder="Number of rooms"
              {...register('number_of_rooms', {
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
            />
            <input
              placeholder="Number of guests"
              {...register('number_of_guests', {
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
            />

          </section>
          <section>
            <label>Select Hotel</label>
            <select
              {...register('hotel_id', { required: true })}
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </section>
          <section>
            <input type="submit" />
          </section>
        </form>
      </div>

    </div>
  );
};

export default ReservePage;
