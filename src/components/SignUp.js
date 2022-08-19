/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import auth from '../img/authentication.jpg';
import { createUser } from '../redux/User/User'

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => (dispatch(createUser(data)) ? navigate('/log-in') : null) ;

  return (
    <div className="reserve-container" style={{ 
      backgroundImage: `url(${auth})` 
    }}>
       <div className="reserve-heading">
              <h1>CREATE AN ACCOUNT</h1>
              <hr></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form">
          <input {...register('name')} required minLength={3} maxLength ={20} placeholder="👤  name" />
        </div>
        <div className="login-form">
          <input {...register('email',{
          required: "Email address is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"}
          })} placeholder ="✉️  email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="login-form">
          <input {...register('password')}  required minLength={6} placeholder="🔒  password" />
        </div>
        <div className="login-btn">
          <input type="submit" value="SIGN UP"/>
        </div>
    </form>
    </div>
  );
}
/* eslint-enable */
