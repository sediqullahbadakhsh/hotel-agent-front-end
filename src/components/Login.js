/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../redux/User/User'

export default function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(logInUser(data)) ;

  return (
    <form onSubmit={handleSubmit(onSubmit)} style = {{float : "right"}}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('email')} placeholder ="email" />
      <input {...register('password')} placeholder="password" />
      <input type="submit" />
    </form>
  );
}
/* eslint-enable */
