/* eslint-disable */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservePage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  //   dispatch(logInUser(data));
  //   const { data } = useSelector((state) => state.MostRecent);

  return (
    <div className="reserve-container">
      <div className="reserve-heading">
        <h1>BOOK A HOTEL</h1>
        <p>Please select a Hotel</p>
      </div>
      <div className="reserve-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register('email')} placeholder="email" />
          <input {...register('password')} placeholder="password" />
          <section>
            <label>React Datepicker</label>
            {/* <Controller
              as={ReactDatePicker}
              control={control}
              valueName="selected" // DateSelect value's name is selected
              onChange={([selected]) => selected}
              name="ReactDatepicker"
              className="input"
              placeholderText="Select date"
            /> */}
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value, ref } }) => (
            <ReactDatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              placeholderText="Select date"
            />
          )}
      />
          </section>
          <input type="submit" />
        </form>
      </div>

    </div>
  );
};

export default ReservePage;
