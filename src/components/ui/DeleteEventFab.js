import React from 'react';
import { useDispatch } from 'react-redux';

import { eventStartDelete } from '../../actions/calendar';

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(eventStartDelete());
  };

  return (
    <button
      type='button'
      className='btn btn-danger fab-danger'
      onClick={handleDeleteEvent}
    >
      <i className='fas fa-trash'></i>
      <span>Delete event</span>
    </button>
  );
};
