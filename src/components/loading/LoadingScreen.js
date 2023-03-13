import React from 'react';
import { Roller } from 'react-spinners-css';

export const LoadingScreen = () => {
  return (
    <div className='loading__container'>
      <Roller size={80} color='#0d0d0d' className='loading__circle' />
      <p>Loading...</p>
    </div>
  );
};
