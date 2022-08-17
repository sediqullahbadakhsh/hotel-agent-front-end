/* eslint-disable */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addHotel } from '../redux/Hotel/Hotel';
import create from '../img/create.jpg';

export default function AddHotel() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,e) => {dispatch(addHotel(data)); e.target.reset();}
  return (
    <div className="reserve-container" style={{ 
      backgroundImage: `url(${create})` 
    }}>
      <div className="reserve-heading">
              <h1>ADD YOUR HOTEL</h1>
              <hr></hr>
              <p>Explore & Discover</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} style = {{float : "right"}}>
        <div className="login-form">
          <input {...register('name')} placeholder="🏠 hotel name" />
        </div>
        <div className="login-form">
          <input {...register('description')} placeholder="📄 description" />
        </div>
        <div className="login-form">
          <input {...register('cost')} type = "number"  placeholder="cost" step={0.01} />
        </div>
        <div className="login-form">
          <input {...register('address')} placeholder="🗺 address" />
        </div>
        <div className="login-form">
          <input {...register('image')}  placeholder="🎑 image" />
        </div>
        <div className="login-btn">
          <input type="submit" value="ADD HOTEL"/>
        </div>
      </form>
    </div>
  );
}
