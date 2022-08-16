/* eslint-disable */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addHotel } from '../redux/Hotel/Hotel';

export default function AddHotel() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(addHotel(data));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style = {{float : "right"}}>
        <input {...register('name')} placeholder="hotel name" />
        <input {...register('description')} placeholder="description" />
        <input {...register('cost')} type = "number"  placeholder="cost" step={0.01} />
        <input {...register('address')} placeholder="address" />
        <input {...register('image')}  placeholder="image" />

        <input type="submit" />
      </form>
    </div>
  );
}
