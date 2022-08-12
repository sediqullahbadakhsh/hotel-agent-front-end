/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/User/User'

export default function SignUp() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(createUser(data)) ;

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
