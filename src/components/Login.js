/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../redux/User/User';
import { useNavigate } from 'react-router-dom';
import auth from '../img/authentication.jpg';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(logInUser(data)) ? (navigate('/')) : null;
  };

  return (
    <div
      className="reserve-container"
      style={{
        backgroundImage: `url(${auth})`,
      }}
    >
      <div className="reserve-heading">
        <h1>WELCOME BACK!</h1>
        <hr />
        <p>Sign in to continue</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ float: 'right' }}>
        <div className="login-form">
          <input {...register('email', {pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})} required placeholder="✉️  email" />
          {errors.email && <p>email is not Valid</p>}
        </div>
        <div className="login-form">
          <input {...register('password')} required minLength={6} placeholder="🔒  password" />
        </div>
        <div className="login-btn">
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </div>
  );
}
/* eslint-enable */
