import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  // ------------- LOGIN
  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: '',
    lPassword: '',
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(lEmail, lPassword));
  };

  // ---------------- REGISTER

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: '',
    rEmail: '',
    rPassword: '',
    rPassword2: '',
  });

  const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

  const handleResgister = (e) => {
    e.preventDefault();

    if (rPassword !== rPassword2) {
      return Swal.fire('Error', "Passwords don't match", 'error');
    }

    dispatch(startRegister(rEmail, rPassword, rName));
  };
  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                name='lEmail'
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                name='lPassword'
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group'>
              <input type='submit' className='btnSubmit' value='Login' />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Sign Up</h3>
          <form onSubmit={handleResgister}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                onChange={handleRegisterInputChange}
                name='rName'
                value={rName}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={handleRegisterInputChange}
                name='rEmail'
                value={rEmail}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={handleRegisterInputChange}
                name='rPassword'
                value={rPassword}
              />
            </div>

            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Confirm your password'
                onChange={handleRegisterInputChange}
                name='rPassword2'
                value={rPassword2}
              />
            </div>

            <div className='form-group'>
              <input type='submit' className='btnSubmit' value='Sign Up' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
