/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { createUser } from '../redux/User/User'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => (dispatch(createUser(data)) ? navigate('/log-in') : null) ;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('name')} placeholder="name" />
      <input {...register('email')} placeholder ="email" />
      <input {...register('password')} placeholder="password" />
      <input type="submit" />
    </form>
  );
}
/* eslint-enable */
