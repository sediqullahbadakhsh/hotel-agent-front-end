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
  const { register, handleSubmit } = useForm();
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
          <input {...register('name')} placeholder="👤  name" />
        </div>
        <div className="login-form">
          <input {...register('email')} placeholder ="✉️  email" />
        </div>
        <div className="login-form">
          <input {...register('password')} placeholder="🔒  password" />
        </div>
        <div className="login-btn">
          <input type="submit" value="SIGN UP"/>
        </div>
    </form>
    </div>
  );
}
/* eslint-enable */
