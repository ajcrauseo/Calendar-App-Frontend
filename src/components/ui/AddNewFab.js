import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/calendar';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(eventClearActiveEvent())
    dispatch(uiOpenModal())
  }

  return (
    <button type='button' className='btn btn-primary fab' onClick={handleOpenModal}>
      <i className='fas fa-plus'></i>
    </button>
  );
};
